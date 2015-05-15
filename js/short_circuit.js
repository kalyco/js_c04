var artist = 'Rembrandt';
var artistA = (artist || 'Unknown');
// If the variable artist have a value, then ArtistA will
// be given the same value as artist (because a non-empty string is truthy)

var artist = '';
var artistA = (artist || 'Unknown');
// If the string is empty, artistA becomes a string 'Unkown'.

var artist = '';
var ArtistA = (artist || {});
// or create an empty object if artist doesn't have a value.

valueA = 0;
valueB = 1;
ValueC = 2;

if (valueA || valueB || valuesC) {
  // do something here
}
