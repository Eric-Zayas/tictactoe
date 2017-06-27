var prompt = require('prompt');

let tictactoeMatrix = [
  [" ","|"," ","|"," "],
  [" ","|"," ","|"," "],
  [" ","|"," ","|"," "],
];

let renderMatrix =  "   1   2   3 \n" + "1  " + tictactoeMatrix[0].join(' ') + "\n" + "   __________  \n" + "2  " + tictactoeMatrix[1].join(' ') + " \n" + "   __________ \n" + "3  " + tictactoeMatrix[2].join(' ');
console.log(renderMatrix);

prompt.start();
let count = 0; 
count % 2 === 0 ?  console.log("Player X's turn ") : console.log("Player O's turn");

prompt.get(['position'], function (err, result) {
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  
  placePosition(result.position);
  count ++;
  if(count < 9) prompt.start();
});

function onErr(err) {
  console.log(err);
  return;
}

const playerTurn = function(){
  
}

const placePosition = function(position){

  console.log("pos arr", positionArr[1]);
  tictactoeMatrix[positionArr[0]][positionArr[2]] = "X";
  renderMatrix =  "   1   2   3 \n" + "1  " + tictactoeMatrix[0].join(' ') + "\n" + "   __________  \n" + "2  " + tictactoeMatrix[1].join(' ') + " \n" + "   __________ \n" + "3  " + tictactoeMatrix[2].join(' ');
  console.log(renderMatrix);
  
}