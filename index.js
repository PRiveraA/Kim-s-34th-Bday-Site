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
  console.log('Confetti triggered!');
}

// Add event listener to button
document.getElementById('confetti-button').addEventListener('click', triggerConfetti);

// Trigger confetti when the page fully loads
window.addEventListener('load', function () {
  console.log('Page fully loaded. Triggering confetti...');
  triggerConfetti();
});

// Toggle audio play/pause and update button text
const playButton = document.getElementById('play-audio-button');
const audio = document.getElementById('birthday-audio');

playButton.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "Press to make it stop!";  // Change button text to "Stop Audio"
    console.log('Birthday song is playing.');
  } else {
    audio.pause();
    playButton.textContent = "Press for Birthday Song!";  // Change button text back to "Play Birthday Song"
    console.log('Birthday song is paused.');
  }
});

// Reset button text when audio ends
audio.addEventListener('ended', function () {
  playButton.textContent = "Press for Birthday Song!";  // Reset button text after audio ends
  console.log('Birthday song has ended.');
});