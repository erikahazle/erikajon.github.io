console.log('Javascipt is working');

var lastMove = '';

function getMove() {
  if (lastMove === 'x') {
    getUser2Move();
  } else {
    getUser1Move();
  }
}

function getUser2Move() {
  $('li').on('click', function() {
    $(this).removeClass('cross');
    $(this).addClass('nought');
    lastMove = 'o';
    getMove();
  });
}

function getUser1Move() {
  $('li').on('click', function() {
    $(this).removeClass('nought');
    $(this).addClass('cross');
    lastMove = 'x';
    getMove();
  })
}

$(document).ready(function() {
  getMove();
})