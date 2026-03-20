import os
import sys
import subprocess

# Ensure Pillow is installed
try:
    from PIL import Image
except ImportError:
    print("Installing Pillow...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def optimize_images(directory):
    total_saved = 0
    count = 0
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                filepath = os.path.join(root, file)
                try:
                    original_size = os.path.getsize(filepath)
                    with Image.open(filepath) as img:
                        # Convert to RGB if PNG to save as JPEG/optimized or just keep format
                        format = img.format
                        if img.mode != 'RGB' and format in ['JPEG', 'JPG']:
                            img = img.convert('RGB')
                        
                        if format == 'PNG':
                            # Optimize PNG without resizing
                            img.save(filepath, format='PNG', optimize=True)
                        else:
                            # Optimize JPEG heavily without resizing
                            img.save(filepath, format='JPEG', optimize=True, quality=65)
                    
                    new_size = os.path.getsize(filepath)
                    saved = original_size - new_size
                    if saved > 0:
                        total_saved += saved
                        count += 1
                        print(f"Optimized {file}: saved {saved/1024/1024:.2f} MB")
                except Exception as e:
                    print(f"Error processing {file}: {e}")
                    
    print(f"Total optimized: {count} images. Saved {(total_saved/1024/1024):.2f} MB overall.")

if __name__ == "__main__":
    assets_images = r"C:\My Web Sites\UZHNAQ\assets\images"
    print("Starting optimization...")
    optimize_images(assets_images)
