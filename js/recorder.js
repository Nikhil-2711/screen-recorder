/**
 * ==========================================
 * Screen Recorder Module
 * Handles recording using MediaRecorder API.
 * ==========================================
 */

let mediaRecorder;
let recordedChunks = [];

let screenStream;
let microphoneStream;
let combinedStream;

/**
 * Requests screen and microphone permissions
 * and returns a combined MediaStream.
 */
export async function initializeRecorder() {

    screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
    });

    microphoneStream = await navigator.mediaDevices.getUserMedia({
        audio: true
    });

    combinedStream = new MediaStream([
        ...screenStream.getVideoTracks(),
        ...microphoneStream.getAudioTracks()
    ]);

    return combinedStream;
}

/**
 * Starts recording.
 */
export function startRecording(stream) {

    recordedChunks = [];

    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {

        if (event.data.size > 0) {
            recordedChunks.push(event.data);
        }

    };

    mediaRecorder.start();

    return mediaRecorder;
}

/**
 * Pause recording.
 */
export function pauseRecording() {

    mediaRecorder.pause();

}

/**
 * Resume recording.
 */
export function resumeRecording() {

    mediaRecorder.resume();

}

/**
 * Stop recording.
 */
export function stopRecording() {

    return new Promise((resolve) => {

        mediaRecorder.onstop = () => {

            const blob = new Blob(recordedChunks, {
                type: "video/webm"
            });

            resolve(blob);

        };

        mediaRecorder.stop();

        screenStream.getTracks().forEach(track => track.stop());

        microphoneStream.getTracks().forEach(track => track.stop());

    });

}