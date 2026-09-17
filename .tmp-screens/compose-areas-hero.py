from PIL import Image
from pathlib import Path

src = Path(
    r"C:\Users\HomePC\.cursor\projects\c-Users-HomePC-Desktop-acridic\assets"
    r"\c__Users_HomePC_AppData_Roaming_Cursor_User_workspaceStorage_"
    r"97a81133f57ce4a533a25d3c3ea9a2a3_images_Screenshot_2026-09-18_013629-f4a775ba-10cd-42f5-8c29-368533021a41.png"
)
out = Path(r"C:\Users\HomePC\Desktop\acridic\public\images\research\research-areas-hero.png")
preview = Path(r"C:\Users\HomePC\Desktop\acridic\.tmp-screens\composed-hero-preview.png")

im = Image.open(src).convert("RGB")

# Below the Figma navbar (~y88 would be safest; 74 keeps a sliver of sky
# that tucks under the live navbar). Right of all copy, left of Africa.
left, top, right, bottom = 442, 82, im.size[0], 482
crop = im.crop((left, top, right, bottom))
hi = crop.resize((crop.size[0] * 2, crop.size[1] * 2), Image.Resampling.LANCZOS)
hi.save(out, "PNG", optimize=True)
hi.save(preview, "PNG", optimize=True)
print("saved", out, hi.size, "from crop", crop.size)
