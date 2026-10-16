"""Crop the right-side Africa silhouette from the Figma footer screenshot
and punch the pale mint background to transparency without eating the landmass."""

from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

FIGMA = Path(
    r"C:\Users\HomePC\.cursor\projects\c-Users-HomePC-Desktop-acridic\assets"
    r"\c__Users_HomePC_AppData_Roaming_Cursor_User_workspaceStorage"
    r"_97a81133f57ce4a533a25d3c3ea9a2a3_images"
    r"_Screenshot_2026-09-19_051315-a9bcef66-7ea7-4d4f-beaf-9a3749d6392e.png"
)
OUT = Path(r"C:\Users\HomePC\Desktop\acridic\public\images\footer-africa-silhouette.png")
DEBUG = Path(r"C:\Users\HomePC\Desktop\acridic\.tmp-screens\africa-crop-debug.png")

im = Image.open(FIGMA).convert("RGBA")
arr = np.array(im)
h, w = arr.shape[:2]
print("figma screenshot", w, h)

rgb = arr[:, :, :3].astype(np.float32)
r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]

# Sample the pale mint from the upper-left (no continent there).
bg = rgb[int(h * 0.06) : int(h * 0.16), int(w * 0.08) : int(w * 0.22)].mean(axis=(0, 1))
print("bg", bg.tolist())

# Crop the right panel that holds Africa, stopping above the tree band.
x0, x1 = int(w * 0.48), w
y0, y1 = int(h * 0.04), int(h * 0.84)
crop = arr[y0:y1, x0:x1].copy()
cr, cg, cb = crop[:, :, 0].astype(np.float32), crop[:, :, 1].astype(np.float32), crop[:, :, 2].astype(np.float32)
ch, cw = crop.shape[:2]
print("crop", cw, ch, "origin", x0, y0)

# Land is a slightly greener wash than the surrounding mint.
# Continent sample ~[217, 242, 221]; pale mint ~[246, 249, 245]; pills ~[229, 242, 234].
green_bias = cg - np.maximum(cr, cb)
sat = cg - (cr + cb) / 2
luma = 0.2126 * cr + 0.7152 * cg + 0.0722 * cb
print(
    "bias p50/p80/p95",
    float(np.percentile(green_bias, 50)),
    float(np.percentile(green_bias, 80)),
    float(np.percentile(green_bias, 95)),
)

# Exclude dark UI text / icons that might sit over the west coast.
is_text = luma < 140
# Exclude the white Contact Us button / pill chrome.
is_white_ui = (luma > 246) & (green_bias < 8)

# Tight land: more saturated green than the wash, not near-white.
is_land = (green_bias > 14) & (green_bias < 32) & (sat > 12) & (cg > 200) & (cr < 236) & (cb < 240) & ~is_text
print("land pixels raw", int(is_land.sum()))

# Keep the largest connected green blob (the continent + Madagascar if attached).
visited = np.zeros((ch, cw), dtype=bool)
seed_y, seed_x = int(ch * 0.38), int(cw * 0.62)
print("seed", seed_x, seed_y, "land?", bool(is_land[seed_y, seed_x]), "rgb", crop[seed_y, seed_x, :3].tolist())

# If seed missed, search a window.
if not is_land[seed_y, seed_x]:
    found = False
    for dy in range(-80, 81, 4):
        for dx in range(-80, 81, 4):
            yy, xx = seed_y + dy, seed_x + dx
            if 0 <= yy < ch and 0 <= xx < cw and is_land[yy, xx]:
                seed_y, seed_x = yy, xx
                found = True
                break
        if found:
            break
    print("relocated seed", seed_x, seed_y, found)

q = deque([(seed_y, seed_x)])
visited[seed_y, seed_x] = True
while q:
    y, x = q.popleft()
    for ny in (y - 1, y, y + 1):
        for nx in (x - 1, x, x + 1):
            if 0 <= ny < ch and 0 <= nx < cw and not visited[ny, nx] and is_land[ny, nx]:
                visited[ny, nx] = True
                q.append((ny, nx))

print("connected land", int(visited.sum()))

# Fill holes inside the continent (glow dots, arcs, small punch-outs).
inv = ~visited
seen = np.zeros_like(inv)
border = deque()
for x in range(cw):
    if inv[0, x]:
        seen[0, x] = True
        border.append((0, x))
    if inv[ch - 1, x]:
        seen[ch - 1, x] = True
        border.append((ch - 1, x))
for y in range(ch):
    if inv[y, 0]:
        seen[y, 0] = True
        border.append((y, 0))
    if inv[y, cw - 1]:
        seen[y, cw - 1] = True
        border.append((y, cw - 1))
while border:
    y, x = border.popleft()
    for ny in (y - 1, y, y + 1):
        for nx in (x - 1, x, x + 1):
            if 0 <= ny < ch and 0 <= nx < cw and not seen[ny, nx] and inv[ny, nx]:
                seen[ny, nx] = True
                border.append((ny, nx))
holes = inv & ~seen
visited |= holes
print("after hole fill", int(visited.sum()), "holes", int(holes.sum()))

# Break thin connections to frame chrome / button strokes, then restore the continent edge.
mask_img = Image.fromarray((visited.astype(np.uint8) * 255), "L")
mask_img = mask_img.filter(ImageFilter.MinFilter(5))
eroded = np.array(mask_img) > 127
visited = np.zeros((ch, cw), dtype=bool)
if eroded[seed_y, seed_x]:
    sy, sx = seed_y, seed_x
else:
    ys, xs = np.where(eroded)
    sy, sx = (int(ys.mean()), int(xs.mean())) if len(xs) else (seed_y, seed_x)
q = deque([(sy, sx)])
visited[sy, sx] = True
while q:
    y, x = q.popleft()
    for ny in (y - 1, y, y + 1):
        for nx in (x - 1, x, x + 1):
            if 0 <= ny < ch and 0 <= nx < cw and not visited[ny, nx] and eroded[ny, nx]:
                visited[ny, nx] = True
                q.append((ny, nx))
mask_img = Image.fromarray((visited.astype(np.uint8) * 255), "L")
mask_img = mask_img.filter(ImageFilter.MaxFilter(7))
visited = np.array(mask_img) > 127
print("after erode/dilate", int(visited.sum()))

# The Contact Us chrome sits west of the landmass; the Figma frame corner is top-right.
yy, xx = np.ogrid[:ch, :cw]
visited &= ~((xx < cw * 0.08) | ((xx > cw * 0.88) & (yy < ch * 0.40)))

# Paint UI leftovers (body copy, emerald strokes) back to continent green everywhere
# so leaked alpha cannot reveal gray text or the button outline.
land_color = np.array([218.0, 243.0, 222.0], dtype=np.float32)
is_gray_text = (
    (np.abs(cr - cg) < 45)
    & (np.abs(cg - cb) < 50)
    & (luma > 70)
    & (luma < 185)
    & (green_bias < 14)
)
is_emerald = (cg > cr + 30) & (cg > 90) & (cg < 200) & (cr < 80)
rgb_out = crop[:, :, :3].astype(np.float32)
rgb_out[is_gray_text | is_emerald] = land_color
visited &= ~is_emerald

# Flatten leftover copy / button stroke on the west bulge; keep bright arcs/dots.
yy, xx = np.ogrid[:ch, :cw]
keep_glow = luma > 246
west = xx < cw * 0.46
rgb_out[west & ~keep_glow] = land_color

# Soft alpha so the landmass blends — keep a continent-shaped cutout, not a mint rectangle.
mask_img = Image.fromarray((visited.astype(np.uint8) * 255), "L")
mask_img = mask_img.filter(ImageFilter.GaussianBlur(radius=2.6))
alpha = np.array(mask_img).astype(np.float32)

out = np.dstack([rgb_out.astype(np.uint8), alpha.astype(np.uint8)])

# Trim empty margins so object-contain isn't boxed by transparent padding.
ys, xs = np.where(out[:, :, 3] > 12)
if len(xs):
    pad = 8
    x_min, x_max = max(0, xs.min() - pad), min(cw, xs.max() + pad + 1)
    y_min, y_max = max(0, ys.min() - pad), min(ch, ys.max() + pad + 1)
    out = out[y_min:y_max, x_min:x_max]
    print("trimmed", out.shape[1], out.shape[0])

cut = Image.fromarray(out, "RGBA")
# Upscale slightly so the silhouette stays crisp at 1440.
cut = cut.resize((cut.width * 2, cut.height * 2), Image.Resampling.LANCZOS)
cut.save(OUT)
cut.save(DEBUG)
print("saved", OUT, cut.size, "opaque", int((out[:, :, 3] > 20).sum()))
