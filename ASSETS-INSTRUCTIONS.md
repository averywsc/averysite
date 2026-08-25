Instructions to add provided photos and Dotmatri font

1) Copy the Dotmatri font
   - Copy the DOTMATRI.TTF file into the project fonts folder:
     C:/Users/Avery/Documents/GitHub/averysite/fonts/DOTMATRI.TTF
   - The CSS already includes an @font-face rule named 'Dotmatri' that references fonts/DOTMATRI.TTF.

2) Add the photos
   - Create a folder at: C:/Users/Avery/Documents/GitHub/averysite/photos/
   - From the images you attached, copy the ones you want into that folder and name them:
     photo-01.jpg, photo-02.jpg, ..., photo-12.jpg
   - The site (photo.html) references these filenames.

3) Optional: optimize images for web
   - Recommended width: 1600px (long edge). Recommended JPEG quality: 70-85.
   - Example ImageMagick (if installed):
     magick "input.CR2" -resize 1600x -quality 82 photos/photo-01.jpg
   - Or use any batch image converter (Photoshop, Affinity, Preview, or dedicated tools).

4) Notes about usage
   - .page-title uses the Dotmatri font (fallback to the site's active font if Dotmatri is missing).
   - If any photos are missing, the <figure> placeholders will be empty; ensure the filenames match.

5) Verification
   - After copying the font and photos, open photo.html in a browser to confirm images load and titles use Dotmatri.

If you want, I can:
- (A) Try to batch-optimize the attached images and add them to the project (requires permission to write large files).  
- (B) Update index.html or the scrolling strip to use a subset of these photos as background — say which ones to include.
- (C) Neither

Please pick one option.