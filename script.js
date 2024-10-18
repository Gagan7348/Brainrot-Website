// Array of sigma quotes
const sigmaQuotes = [
    { rule: 123, quote: "Shit your pants." },
    { rule: 22, quote: "Never let anyone tell you how to tie your shoelaces." },
    { rule: 45, quote: "Make your own path, even if it leads nowhere." },
    { rule: 76, quote: "Refuse to smile unless it's for world domination." },
    { rule: 101, quote: "Don’t answer questions. Ask them instead." },
    { rule: 305, quote: "Always stay mysterious. Even to yourself." },
    { rule: 420, quote: "Play by your rules, break theirs." },
    { rule: 777, quote: "Silence is stronger than words, unless the words are yours." }
  ];
  
  // Function to get a random sigma quote
  function getRandomSigmaQuote() {
    const randomIndex = Math.floor(Math.random() * sigmaQuotes.length);
    return sigmaQuotes[randomIndex];
  }
  
  // Function to display the quote
  function displayQuote() {
    const randomQuote = getRandomSigmaQuote();
    const quoteElement = document.getElementById('quote');
    const ruleElement = document.getElementById('rule-number');
  
    // Add fade out effect before changing the quote
    quoteElement.style.opacity = 0;
    ruleElement.style.opacity = 0;
  
    // Wait for the fade out effect and then update the content
    setTimeout(() => {
      quoteElement.textContent = `"${randomQuote.quote}"`;
      ruleElement.textContent = `Sigma Rule #${randomQuote.rule}`;
  
      // Add fade-in effect after updating
      quoteElement.style.opacity = 1;
      ruleElement.style.opacity = 1;
    }, 500);
  }
  
  // Display a random quote when the page loads
  window.onload = function() {
    displayQuote();
  };
  
  // Add event listener to the button for generating new quotes
  document.getElementById('new-quote-btn').addEventListener('click', function() {
    displayQuote();
  });
  
  // Background music controls
  const backgroundMusic = document.getElementById('background-music');
  const muteBtn = document.getElementById('mute-btn');
  const volumeSlider = document.getElementById('volume-slider');
  const playMusicBtn = document.getElementById('play-music-btn');
  
  // Play music on button click (due to browser restrictions)
  playMusicBtn.addEventListener('click', function() {
    backgroundMusic.play();
  });
  
  // Mute/Unmute music
  muteBtn.addEventListener('click', function() {
    if (backgroundMusic.muted) {
      backgroundMusic.muted = false;
      muteBtn.textContent = 'Mute';
    } else {
      backgroundMusic.muted = true;
      muteBtn.textContent = 'Unmute';
    }
  });
  
  // Adjust volume
  volumeSlider.addEventListener('input', function() {
    backgroundMusic.volume = volumeSlider.value;
  });
  
  // Countdown for Talk Tuah podcast episode
  const podcastCountdown = document.getElementById('podcast-countdown');
  
  // Set the date and time for the next episode (example: next Friday at 5 PM)
  const nextEpisodeDate = new Date();
  nextEpisodeDate.setDate(nextEpisodeDate.getDate() + (5 - nextEpisodeDate.getDay() + 7) % 7); // Next Friday
  nextEpisodeDate.setHours(17, 0, 0); // Set to 5 PM
  
  function updateCountdown() {
    const now = new Date();
    const timeDifference = nextEpisodeDate - now;
  
    // Calculate hours remaining
    const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
    podcastCountdown.textContent = `${hoursRemaining} hours till new Talk Tuah podcast episode`;
  
    // If the time has passed, update the countdown
    if (timeDifference < 0) {
      clearInterval(countdownInterval);
      podcastCountdown.textContent = 'New episode available now!';
    }
  }
  
  // Update the countdown every hour
  const countdownInterval = setInterval(updateCountdown, 1000 * 60 * 60);
  updateCountdown();
  
  // Close the Lunchly ad
  const closeAdButton = document.getElementById('close-ad');
  closeAdButton.addEventListener('click', function() {
    document.getElementById('lunchly-ad').style.display = 'none';
  });
  