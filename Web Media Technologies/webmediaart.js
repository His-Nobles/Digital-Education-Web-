// This function loads the YouTube IFrame Player API code asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'player' div with an iframe and YouTube player after API is loaded
var player, default_vid;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '350',
    width: '600',
    videoId: '5oH9Nr3bKfw',  // Correct YouTube video ID
    playerVars: {
      'playsinline': 1,
      'modestbranding': 1, // Prevent YouTube logo from appearing
      'rel': 0,            // Prevent related videos from showing at the end
      'showinfo': 0        // Hide video title and uploader before the video starts
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  default_vid = new YT.Player('default_vid', {
    height: '350',
    width: '600',
    videoId: 'p-kAI-qOeJA',  // Replace with the actual YouTube video ID for the second video
    playerVars: {
      'playsinline': 1,
      'modestbranding': 1, // Prevent YouTube logo from appearing
      'rel': 0,            // Prevent related videos from showing at the end
      'showinfo': 0        // Hide video title and uploader before the video starts
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo(); // Automatically play when the player is ready (optional)
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    alert('The video has ended');
  }
}

setTimeout(() => {
  document.getElementById("greetingsgif").style.display = "none";
  startTicTacToe();
}, 5000); // Hide after 5 seconds

const cells = document.querySelectorAll('.cell');
let board = Array(9).fill(null);
let currentPlayer = 'X'; // JavaScript (AI) starts

// JavaScript makes the first random move
function initializeGame() {
  const randomIndex = Math.floor(Math.random() * 9);
  cells[randomIndex].innerHTML = currentPlayer;
  board[randomIndex] = currentPlayer;
  currentPlayer = 'O'; // Now it's the user's turn
}

cells.forEach(cell => {
  cell.addEventListener('click', function() {
    if (!cell.innerHTML && currentPlayer === 'O') {
      cell.innerHTML = currentPlayer;
      const index = cell.getAttribute('data-index');
      board[index] = currentPlayer;
      currentPlayer = 'X';
      // Check for winner or next move logic here
      javascriptMove();
    }
  });
});

function javascriptMove() {
  // JavaScript move logic goes here
  // Check for winner, draw line, etc.
}
