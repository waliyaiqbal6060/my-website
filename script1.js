// Page Navigation
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
  }
  
  // Tic Tac Toe Logic
  let board = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let gameActive = true;
  
  const winConditions = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  
  function makeMove(index) {
    if (!gameActive || board[index] !== "") return;
  
    board[index] = currentPlayer;
    document.querySelectorAll('.cell')[index].textContent = currentPlayer;
  
    if (checkWin()) {
      document.getElementById("status").textContent = `${currentPlayer} wins!`;
      gameActive = false;
    } else if (!board.includes("")) {
      document.getElementById("status").textContent = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("status").textContent = `Turn: ${currentPlayer}`;
    }
  }
  
  function checkWin() {
    return winConditions.some(condition => {
      const [a, b, c] = condition;
      return board[a] === currentPlayer &&
             board[a] === board[b] &&
             board[a] === board[c];
    });
  }
  
  function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.getElementById("status").textContent = `Turn: ${currentPlayer}`;
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = "");
  }
  
  // Set default turn display
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("status").textContent = `Turn: ${currentPlayer}`;
  });
  