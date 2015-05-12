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

function getUser2Move() {
  $('li').on('click', function() {
    $(this).removeClass('cross');
    $(this).addClass('nought');
    lastMove = 'o';
    indexPosition = Number($(this).attr('value')) - 1;
    table[indexPosition] = 'o';
    checkWinner();
  });
}

function getUser1Move() {
  $('li').on('click', function() {
    $(this).removeClass('nought');
    $(this).addClass('cross');
    lastMove = 'x';
    indexPosition = Number($(this).attr('value')) - 1;
    table[indexPosition] = 'x';
    checkWinner();
  })
}


function checkWinner(lastMove) {
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