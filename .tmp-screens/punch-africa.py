from collections import deque
from PIL import Image
import numpy as np

src_path = r"C:\Users\HomePC\Desktop\acridic\public\images\partner-africa-network.png"

im = Image.open(src_path).convert("RGBA")
arr = np.array(im).astype(np.int16)
h, w = arr.shape[:2]
rgb = arr[:, :, :3]
bg = np.array([234, 246, 234], dtype=np.int16)
dist = np.abs(rgb - bg).sum(axis=2)
luma = 0.2126 * rgb[:, :, 0] + 0.7152 * rgb[:, :, 1] + 0.0722 * rgb[:, :, 2]
green_bias = rgb[:, :, 1] - rgb[:, :, 0]

is_land = (dist > 24) & (green_bias > 14)
is_glow = luma > 246
is_arc = (luma > 232) & (rgb[:, :, 0] > 220) & (green_bias < 10)
seed_ok = is_land | is_glow | is_arc

# Keep only the continent connected to an interior seed
visited = np.zeros((h, w), dtype=bool)
q = deque([(200, 137)])
visited[200, 137] = True
while q:
    y, x = q.popleft()
    for ny in (y - 1, y, y + 1):
        for nx in (x - 1, x, x + 1):
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx] and seed_ok[ny, nx]:
                visited[ny, nx] = True
                q.append((ny, nx))

alpha = np.zeros((h, w), dtype=np.uint8)
alpha[visited] = 255

out = arr.astype(np.uint8)
out[:, :, 3] = alpha
cut = Image.fromarray(out, "RGBA")
cut = cut.resize((w * 3, h * 3), Image.Resampling.LANCZOS)
cut.save(src_path)
print("saved", cut.size, "kept", int(visited.sum()))
