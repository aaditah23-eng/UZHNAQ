import os
import glob
import re

def inject_global_css(root_dir):
    html_files = glob.glob(os.path.join(root_dir, "*.html"))
    custom_css_link = '<link rel="stylesheet" href="./assets/custom.css">'
    
    # We want to insert preload rules for videos if they exist, but we found no videos.
    # We will just inject the custom stylesheet.
    
    count = 0
    for filepath in html_files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if already injected
            if custom_css_link in content:
                print(f"Skipping {os.path.basename(filepath)}, already injected.")
                continue
            
            # Inject right before </head>
            if "</head>" in content:
                new_content = content.replace("</head>", f"{custom_css_link}\n</head>")
            else:
                # Fallback, inject at the very end if <head> is somehow missing (unlikely)
                new_content = content + f"\n{custom_css_link}"
            
            # Write back
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Injected CSS into {os.path.basename(filepath)}")
            count += 1
        except Exception as e:
            print(f"Failed to inject in {filepath}: {e}")
            
    print(f"Injected CSS into {count} files successfully.")

if __name__ == "__main__":
    target_dir = r"C:\My Web Sites\UZHNAQ"
    print("Starting CSS injection...")
    inject_global_css(target_dir)
