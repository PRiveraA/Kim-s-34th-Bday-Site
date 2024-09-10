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

// Get the button and audio elements by their IDs
const playButton = document.getElementById('play-audio-button');
const audio = document.getElementById('birthday-audio');

// Toggle audio play/pause and update button text
playButton.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();  // Play the audio
    playButton.textContent = "Press to make it stop!";  // Change button text to "Stop Audio"
  } else {
    audio.pause();  // Pause the audio
    audio.currentTime = 0;  // Reset the audio to the beginning
    playButton.textContent = "Press for Birthday Song!";  // Change button text back to "Play Birthday Song"
  }
});

// Reset button text when audio ends
audio.addEventListener('ended', function () {
  playButton.textContent = "Press for Birthday Song!";  // Reset button text after audio ends
});