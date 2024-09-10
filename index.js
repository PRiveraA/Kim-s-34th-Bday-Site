// Initialize jsConfetti instance
const jsConfetti = new JSConfetti();

// Function to trigger confetti
function triggerConfetti() {
  jsConfetti.addConfetti({
    emojis: ['❤️', '🦄', '🧜‍♀️', '☘️', '🫐', '🥳'],
    confettiColors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'],
    confettiRadius: 6,
    confettiNumber: 100,
    emojiSize: 100
  });
}

// Trigger confetti automatically when the page fully loads
window.addEventListener('load', function () {
  triggerConfetti();
});

// Get the button and audio elements by their IDs
const playButton = document.getElementById('play-audio-button');
const audio = document.getElementById('birthday-audio');

// Track if confetti has already been triggered at the 33-second mark
let confettiTriggered = false;

// Toggle audio play/pause and update button text
playButton.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();  // Play the audio
    playButton.textContent = "Press to make it stop!";  // Change button text to "Stop Audio"
  } else {
    audio.pause();  // Pause the audio
    audio.currentTime = 0;  // Reset the audio to the beginning
    playButton.textContent = "Press for Birthday Song!";  // Change button text back to "Play Birthday Song"
    confettiTriggered = false; // Reset confetti trigger for next play
  }
});

// Listen for the timeupdate event to check when the audio hits the 33-second mark
audio.addEventListener('timeupdate', function () {
  if (audio.currentTime >= 32.2 && !confettiTriggered) {
    triggerConfetti();  // Trigger confetti at 33 seconds
    confettiTriggered = true;  // Prevent it from triggering again in the same play
  }
});

// Reset button text when audio ends
audio.addEventListener('ended', function () {
  playButton.textContent = "Press for Birthday Song!";  // Reset button text after audio ends
  confettiTriggered = false;  // Reset confetti trigger for next play
});
