// Trying it out

console.log('Javascipt is working');

var lastMove = '';
var table = [];
var indexPosition;

function getMove() {
  if (lastMove === 'x') {
    $('#move').text("User2, it's your move!");
    getUser2Move();
  } else {
    $('#move').text("User1, it's your move!");
    getUser1Move();
  }
}


function userMove() {
  if (lastMove === 'x') {
    $(this).addClass('nought');
    lastMove = 'o';
    indexPosition = Number($(this).attr('value')) - 1;
    table[indexPosition] = 'o';
    checkWinner();
  } else {
    $(this).addClass("cross");
    lastMove = 'x';
    indexPosition = Number($(this).attr('value')) - 1;
    table[indexPosition] = 'x';
    checkWinner();
  }
} 

function getUser1Move() {
  $('#row1_column1').on('click', userMove);
  $('#row1_column2').on('click', userMove);
  $('#row1_column3').on('click', userMove);
  $('#row2_column1').on('click', userMove);
  $('#row2_column2').on('click', userMove);
  $('#row2_column3').on('click', userMove);
  $('#row3_column1').on('click', userMove);
  $('#row3_column2').on('click', userMove);
  $('#row3_column3').on('click', userMove);
}

function getUser2Move() {
  $('#row1_column1').on('click', userMove);
  $('#row1_column2').on('click', userMove);
  $('#row1_column3').on('click', userMove);
  $('#row2_column1').on('click', userMove);
  $('#row2_column2').on('click', userMove);
  $('#row2_column3').on('click', userMove);
  $('#row3_column1').on('click', userMove);
  $('#row3_column2').on('click', userMove);
  $('#row3_column3').on('click', userMove);
}


function checkWinner() {
  console.log(table);
  var winner = "";
  if (table[0] === table[1] && table[1] === table[2]) {
    winner = table[0];
  } else if (table[3] === table[4] && table[4] === table[5]) {
    winner = table[3];
  } else if (table[6] === table[7] && table[7] === table[8]) {
    winner = table[6];
  } else if (table[0] === table[4] && table[4] === table[8]) {
    winner = table[0];
  } else if (table[2] === table[4] && table[4] === table[6]) {
    winner = table[2];
  } else if (table[0] === table[3] && table[3] === table[6]) {
    winner = table[0];
  } else if (table[1] === table[4] && table[4] === table[7]) {
    winner = table[1];
  } else if (table[2] === table[5] && table[5] === table[8]) {
    winner = table[2];
  }

  if (winner === 'x' || winner === 'o') {
    $('#move').text('');
    $('#result').text('');
    $('#result').text("Winner is " + winner);
  } else {
    getMove();
  } 

}

$(document).ready(function() {
  getMove();
})


