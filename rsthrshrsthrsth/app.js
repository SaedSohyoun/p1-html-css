const board = document.getElementById('chessboard');
const squares = [];

function createChessboard() {
  let isEven = false;
  for (let i = 0; i < 8; i++) {
    isEven = !isEven;
    for (let j = 0; j < 8; j++) {
      isEven = !isEven;
      const square = document.createElement('div');
      square.className = isEven ? 'even' : 'odd';
      squares.push(square);
      board.appendChild(square);
    }
  }
}

createChessboard();

const board = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
];

// Function to print the chess board
function printBoard() {
    for (let i = 0; i < 8; i++) {
        console.log(board[i].join(' '));
    }
}

// Example function for a player's move
function movePiece(fromRow, fromCol, toRow, toCol) {
    const piece = board[fromRow][fromCol];
    board[toRow][toCol] = piece;
    board[fromRow][fromCol] = ' ';
    printBoard();
}

// Initialize the game
printBoard();

// Example move: moving a pawn from (6, 4) to (4, 4)
movePiece(6, 4, 4, 4);