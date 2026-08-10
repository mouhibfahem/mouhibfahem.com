import sys
import os
from PIL import Image

input_path = r"C:\Users\mouhi\.gemini\antigravity\brain\8c70c8bc-c8c7-4a4f-be08-8c67a5fb16fe\.user_uploaded\media_1786299207110.jpg"
output_path = r"c:\Users\mouhi\OneDrive\Desktop\mouhibfahem\public\mouhib-profile.png"
portrait_path = r"c:\Users\mouhi\OneDrive\Desktop\mouhibfahem\public\mouhib-portrait.png"

print(f"Reading input image: {input_path}")
input_image = Image.open(input_path)

try:
    from rembg import remove
    print("Removing background using AI rembg...")
    output_image = remove(input_image)
    output_image.save(output_path, "PNG")
    print(f"Saved transparent background full-body PNG to {output_path}")

    # Also generate a high-end cropped portrait version (head & chest)
    # Get bounding box of non-transparent pixels to crop cleanly
    bbox = output_image.getbbox()
    if bbox:
        # Crop to upper body (top ~ 45% of the bounding box height)
        w = bbox[2] - bbox[0]
        h = bbox[3] - bbox[1]
        portrait_box = (
            bbox[0],
            bbox[1],
            bbox[2],
            bbox[1] + int(h * 0.55)
        )
        portrait_img = output_image.crop(portrait_box)
        portrait_img.save(portrait_path, "PNG")
        print(f"Saved cropped portrait PNG to {portrait_path}")

except Exception as e:
    print("Rembg failed or not installed yet:", e)
    # Fallback copy if rembg not ready
    input_image.save(output_path)
