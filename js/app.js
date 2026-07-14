import {
    initializeRecorder,
    startRecording,
    pauseRecording,
    resumeRecording,
    stopRecording
} from "./recorder.js";

import {
    startTimer,
    stopTimer
} from "./utils.js";
console.log("App JS Loaded Successfully");
const preview = document.getElementById("preview");

const placeholder = document.getElementById("placeholder");

const status = document.getElementById("recordingStatus");

const timer = document.getElementById("timer");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const stopBtn = document.getElementById("stopBtn");
const downloadBtn = document.getElementById("downloadBtn");

let recordedBlob;

startBtn.addEventListener("click", async () => {

    try {

        const stream = await initializeRecorder();

        preview.srcObject = stream;
        preview.style.display = "block";
        placeholder.style.display = "none";

        startRecording(stream);

        startTimer(timer);

        status.textContent = "🟢 Recording";

        startBtn.disabled = true;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;

    } catch (error) {

        alert("Permission denied.");

    }

});

pauseBtn.addEventListener("click", () => {

    pauseRecording();

    pauseBtn.disabled = true;
    resumeBtn.disabled = false;

    status.textContent = "🟡 Paused";

});

resumeBtn.addEventListener("click", () => {

    resumeRecording();

    pauseBtn.disabled = false;
    resumeBtn.disabled = true;

    status.textContent = "🟢 Recording";

});

stopBtn.addEventListener("click", async () => {

    recordedBlob = await stopRecording();

    stopTimer(timer);

    preview.srcObject = null;

    preview.src = URL.createObjectURL(recordedBlob);

    preview.controls = true;

    status.textContent = "🔴 Stopped";

    downloadBtn.disabled = false;

    stopBtn.disabled = true;

    pauseBtn.disabled = true;

    resumeBtn.disabled = true;

});

downloadBtn.addEventListener("click", () => {

    const link = document.createElement("a");

    link.href = URL.createObjectURL(recordedBlob);

    link.download = `screen-recording-${Date.now()}.webm`;

    link.click();

});