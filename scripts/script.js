/**********************
LANDING PAGE
**********************/
var user1Token;

function userChooseToken() {
  user1Token = $('input[name=token]:checked').val();
  localStorage.setItem('user1Token', user1Token);
  $('.chooseToken').css('display', 'none');
  $('.play').removeClass('hide');

  if (user1Token === 'Crosses') {
    $('#user1Token').attr('src', 'images/strawberry.png');
    $('#user2Token').attr('src', 'images/watermelon.png');
  } else {
    $('#user1Token').attr('src', 'images/watermelon.png');
    $('#user2Token').attr('src', 'images/strawberry.png');
  }
}

/**********************
BOARD PAGE
**********************/

var lastMove = '';
var board = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
var winningCombos;

function resetBoard(){
  lastMove = '';
  play();
  $('li').removeClass('cross nought');
  board = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
  $('li').one('click', getMove);
}

function addMoveToBoard(lastMove, indexOfBoard) {
    board[indexOfBoard] = lastMove;
}

function checkWinner() {
  if (board[0] === board[1] && board[1] === board[2]) {
    winner = board[0];
  } else if (board[3] === board[4] && board[4] === board[5]) {
    winner = board[3];
  } else if (board[6] === board[7] && board[7] === board[8]) {
    winner = board[6];
  } else if (board[0] === board[4] && board[4] === board[8]) {
    winner = board[0];
  } else if (board[2] === board[4] && board[4] === board[6]) {
    winner = board[2];
  } else if (board[0] === board[3] && board[3] === board[6]) {
    winner = board[0];
  } else if (board[1] === board[4] && board[4] === board[7]) {
    winner = board[1];
  } else if (board[2] === board[5] && board[5] === board[8]) {
    winner = board[2];
  } else if (board[1] === board[4] && board[4] === board[7]) {
    winner = board[1];
  }

  if(winner === 'x' || winner === 'o') {
    displayWinner();
    resetBoard();
  } else {
    displayNextMove();
  }
}

function displayWinner() {
  if(winner === 'o' && user1Token === 'Crosses') {
      alert('Winner is User 2');
    } else if (winner === 'x' && user1Token === 'Noughts'){
      alert('Winner is User 2');
    } else if (winner === 'o' && user1Token === 'Noughts') {
      alert('Winner is User 1');
    } else {
      alert('Winner is User 1');
  }
}

function displayNextMove() {
  if(lastMove === 'o' && user1Token === 'Crosses') {
      $('#move').text('User 2, please make your move');
    } else if (lastMove === 'x' && user1Token === 'Noughts'){
      $('#move').text('User 1, please make your move');
    } else if (lastMove === 'o' && user1Token === 'Noughts') {
      $('#move').text('User 2, please make your move');
    } else {
      $('#move').text('User 1, please make your move');
  }
}

function play() {
  user1Token = localStorage.getItem('user1Token');
  if (user1Token === 'Crosses') {
    $('#move').text('User 1, please make your move');
  } else {
    $('#move').text('User 2, please make your move');
  }
}

function getMove() {
  if(lastMove === 'x') {
    $(this).addClass('nought'); 
    lastMove = 'o';
    var indexOfBoard = Number($(this).attr('value'));
    addMoveToBoard(lastMove, indexOfBoard);
    checkWinner();
  } else {
    $(this).addClass('cross');
    lastMove = 'x';
    var indexOfBoard = Number($(this).attr('value'));
    addMoveToBoard(lastMove, indexOfBoard);
    checkWinner();
  } 
}

$(document).ready(function() {
  play();

  $('li').one('click', getMove);

  $('#reset').on('click', resetBoard);

  $('#submit').on('click', userChooseToken);

})