// write a function that will add all the clicks for a word

var tvRemote = function(word) {

  const Keyboard =
  [["a", "b", "c", "d", "e", "1", "2", "3"],
  ["f", "g", "h", "i", "j", "4", "5", "6"],
  ["k", "l", "m", "n", "o", "7", "8", "9"],
  ["p", "q", "r", "s", "t", ".", "@", "0"],
  ["u", "v", "w", "x", "y", "z", "_", "/"]];

  var buttons = word.split(''); // ['d', 't', 'z']

  var clickCount = 0;
  var currentRow = 0;
  var currentColumn = 0;

  for (var i = 0; i < buttons.length; i++) {
    var clickState = clicksToLetter(Keyboard, currentRow, currentColumn, buttons[i]);
    currentRow = clickState.row;
    currentColumn = clickState.column;
    clickCount += clickState.clickCount;
  }

return clickCount;

}

function clicksToLetter(keyboard, index, letter) {
  flattenedKeyboard = keyboard.flat();
  clickCount = 0;

  for (index; index < flattenedKeyboard.length; index++) {
    if (flattenedKeyboard[index] == letter) {
      return {
       clickCount: clickCount,
       index: index
     }
     clickCount++;
    }
    if (index == flattenedKeyboard.length - 1) {
      index = -1;
    }
  }
}
