// normal while loop
var i = 1;
var msg = '';

// Store a 5 times table in a variable
while (i < 10) {
  msg += i + ' X 5 = ' + (i * 5) + '<br />';
  i++;
}

document.getElementById('answer').innerHTML = msg;


// do-while loops

var i = 1;
var msg = '';

// Store a 5 times table in a variable
do {
  msg += i + ' X 5 = ' + (i * 5) + '<br />';
  i++;
} while ( i < 1);
// key difference:
// block still runs even while i is 1.

