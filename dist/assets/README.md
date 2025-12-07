Place your profile image here as `vikas.png`.

- Path: `/publichttps://github.com/user-attachments/assets/196dfbd0-064e-49e5-a5f7-fe4c18625a93`
- Recommended size: 400x400 px (square)
- Recommended format: PNG or JPG

When the app runs, the image will be served at `https://github.com/user-attachments/assets/196dfbd0-064e-49e5-a5f7-fe4c18625a93`.

The app now uses a shrink-to-fit approach so the entire image is visible inside the circular frame. This prevents important parts of the face from being cropped out. The `img` uses `object-contain` inside a rounded container.

If you still want to adjust the visual positioning slightly, edit the inline `objectPosition` in `src/Portolio.jsx`:

```js
style={{ objectPosition: '50% 40%' }}
```

Smaller Y percentage (second value) moves the image up; larger moves it down. For best results recrop the source image so the face is centered vertically.
