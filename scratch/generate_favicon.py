from PIL import Image, ImageDraw, ImageFont
import os

# Create high-resolution gold favicon (512x512)
size = 512
img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Draw luxury gold rounded rectangle background
# Gradient colors: #E6C687 (top-left) to #997632 (bottom-right)
radius = 96
mask = Image.new("L", (size, size), 0)
mask_draw = ImageDraw.Draw(mask)
mask_draw.rounded_rectangle([0, 0, size, size], radius=radius, fill=255)

# Create gold gradient
gradient = Image.new("RGBA", (size, size), (0, 0, 0, 0))
for y in range(size):
    for x in range(size):
        # Diagonal factor
        factor = (x + y) / (size * 2)
        r = int(230 * (1 - factor) + 160 * factor)
        g = int(198 * (1 - factor) + 120 * factor)
        b = int(135 * (1 - factor) + 50 * factor)
        gradient.putpixel((x, y), (r, g, b, 255))

# Apply rounded mask to gradient
gold_bg = Image.composite(gradient, img, mask)
draw_gold = ImageDraw.Draw(gold_bg)

# Try loading serif font or default high-res font
try:
    # Try system serif fonts on Windows
    font_paths = [
        "C:\\Windows\\Fonts\\georgiab.ttf",
        "C:\\Windows\\Fonts\\timesbd.ttf",
        "C:\\Windows\\Fonts\\playfair.ttf",
        "C:\\Windows\\Fonts\\arialbd.ttf",
    ]
    font_path = next((p for p in font_paths if os.path.exists(p)), None)
    if font_path:
        font = ImageFont.truetype(font_path, int(size * 0.45))
    else:
        font = ImageFont.load_default()
except Exception as e:
    font = ImageFont.load_default()

# Draw 'MF' text in dark black (#070709)
text = "MF"
bbox = draw_gold.textbbox((0, 0), text, font=font)
w = bbox[2] - bbox[0]
h = bbox[3] - bbox[1]

x = (size - w) / 2 - bbox[0]
y = (size - h) / 2 - bbox[1]

draw_gold.text((x, y), text, fill=(12, 12, 16, 255), font=font)

# Save icons to public & src/app
os.makedirs("public", exist_ok=True)
os.makedirs("src/app", exist_ok=True)

gold_bg.save("public/favicon.png", "PNG")
gold_bg.save("public/apple-touch-icon.png", "PNG")
gold_bg.save("src/app/icon.png", "PNG")
gold_bg.save("src/app/apple-icon.png", "PNG")

# Convert and save as favicon.ico (multi-resolution 16x16, 32x32, 48x48, 64x64)
gold_bg.save("public/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
gold_bg.save("src/app/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

print("Favicon files generated successfully in public/ and src/app/!")
