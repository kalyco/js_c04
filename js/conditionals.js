// if statement
var score = 75;
var msg;

if (score >= 50) {
  msg = 'Congratulations!';
  msg += 'Proceed to the next round.';
}


// if statement with function
var score = 75;
var msg = ''

function congratulate() {
  msg += 'Congratulations! ';
}

if (score >= 50) {
  congratulate();
  msg += 'Proceed to the next round.';
}

