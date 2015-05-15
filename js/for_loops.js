var scores = [23, 45, 67];
var arrayLength = scores.length;
var roundNumber = 0;
var msg = '';
var i;

// loop through items in an array
for (i = 0; i < arrayLength; i++) {
  // Add 1 to the current round
  roundNumber = (i + 1);

  // write the current round to message
  msg += 'Round ' + roundNumber + ' : ';

  // get the scote from the scores array
  msg += scores[i] + '<br />';
}

document.GetElementById('answer').innerHTML = msg;

