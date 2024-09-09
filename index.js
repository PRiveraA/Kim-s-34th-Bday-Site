// Initialize jsConfetti instance
const jsConfetti = new JSConfetti();

// Function to trigger confetti
function triggerConfetti() {
  jsConfetti.addConfetti({
    emojis: ['❤️', '🦄', '🧜‍♀️', '☘️', '🫐', '🥳'],
    confettiColors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'],
    confettiRadius: 9,
    confettiNumber: 100,
    emojiSize: 100
  });
}

// Add event listener to button
document.getElementById('confetti-button').addEventListener('click', triggerConfetti);

// Trigger confetti when the page fully loads
window.addEventListener('load', function () {
  console.log('Page fully loaded. Triggering confetti...');
  triggerConfetti();
});