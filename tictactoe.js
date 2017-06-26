var prompt = require('prompt');

let tictactoeMatrix = [
  [" ","|"," ","|"," "],
  [" ","|"," ","|"," "],
  [" ","|"," ","|"," "],
  
];

let renderMatrix =  "   1   2   3 \n" + "1  " + tictactoeMatrix[0].join(' ') + "\n" + "   __________  \n" + "2  " + tictactoeMatrix[1].join(' ') + " \n" + "   __________ \n" + "3  " + tictactoeMatrix[2].join(' ');
console.log(renderMatrix);



  prompt.start();

  prompt.get(['position'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    // console.log('  Position: ' + result.position);
    placePosition(result.position);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }

var placePosition = function(positionArr){
  // JSON.parse(positionArr);
  console.log("pos arr", positionArr[1])
  tictactoeMatrix[positionArr[0]][positionArr[2]] = "X";
  renderMatrix =  "   1   2   3 \n" + "1  " + tictactoeMatrix[0].join(' ') + "\n" + "   __________  \n" + "2  " + tictactoeMatrix[1].join(' ') + " \n" + "   __________ \n" + "3  " + tictactoeMatrix[2].join(' ');
  console.log(renderMatrix);
  
}