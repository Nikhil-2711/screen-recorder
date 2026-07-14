/**
 * ==========================================
 * Utility Functions
 * ==========================================
 */

let timerInterval;
let seconds = 0;

export function startTimer(timerElement) {

    timerInterval = setInterval(() => {

        seconds++;

        const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
        const secs = String(seconds % 60).padStart(2, "0");

        timerElement.textContent = `${hrs}:${mins}:${secs}`;

    }, 1000);

}

export function stopTimer(timerElement) {

    clearInterval(timerInterval);

    seconds = 0;

    timerElement.textContent = "00:00:00";

}