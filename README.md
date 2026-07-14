# Chrome Screen Recorder

A lightweight Chrome-based Screen Recorder built using **HTML**, **CSS**, and **Vanilla JavaScript**.

This application allows users to record their screen along with microphone audio, preview the recording, and download it as a WebM video file directly from the browser.

---

## Features

- 🎥 Record the entire screen or a browser tab
- 🎤 Record microphone audio
- ▶️ Live preview of recorded video
- ⏸ Pause recording
- ▶️ Resume recording
- ⏹ Stop recording
- 💾 Download recording as a `.webm` file
- 📱 Responsive user interface

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- MediaDevices API
- MediaRecorder API
- Screen Capture API

No external libraries or frameworks are used.

---

## Project Structure

```
screen-recorder/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
└── assets/
    └── (optional icons/images)
```

---

## Browser Compatibility

This project is designed for Chromium-based browsers that support the Screen Capture API.

Recommended browsers:

- Google Chrome
- Microsoft Edge
- Brave
- Opera

---

## How to Run

### Option 1

Simply open `index.html` using a local server.

Example using VS Code:

1. Install **Live Server**
2. Right-click `index.html`
3. Select **Open with Live Server**

---

## How It Works

1. Click **Start Recording**
2. Select the screen, window, or browser tab to capture.
3. Allow microphone access.
4. Recording begins.
5. Use **Pause** or **Resume** if needed.
6. Click **Stop Recording**.
7. Preview the recording.
8. Click **Download** to save the recording.

---

## APIs Used

### Screen Capture API

Used to capture the user's display.

```javascript
navigator.mediaDevices.getDisplayMedia()
```

### MediaDevices API

Used to access the user's microphone.

```javascript
navigator.mediaDevices.getUserMedia()
```

### MediaRecorder API

Used to record combined media streams.

```javascript
new MediaRecorder(stream)
```

---

## Future Improvements

- Webcam overlay (Picture-in-Picture)
- Recording timer
- Audio level indicator
- Recording quality selector
- Custom file name before download
- Upload recordings to cloud storage
- Dark/Light theme
- Keyboard shortcuts
- Recording history

---

## Learning Outcomes

This project demonstrates understanding of:

- Browser Media APIs
- Screen Capture API
- MediaRecorder API
- DOM Manipulation
- Event Handling
- Responsive UI Design
- File Download using Blob URLs

---

## License

This project is developed for educational and training purposes.