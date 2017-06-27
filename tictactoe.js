var prompt = require('prompt');

let tictactoeMatrix = [
  [" ","|"," ","|"," "],
  [" ","|"," ","|"," "],
  [" ","|"," ","|"," "],
];

let exampleTictactoeMatrix = [
  [" ","|"," ","|"," "],
  [" ","|","X","|"," "],
  [" ","|"," ","|"," "],
];


let renderMatrix =  "   1   2   3 \n" + "1  " + tictactoeMatrix[0].join(' ') + "\n" + "   __________  \n" + "2  " + tictactoeMatrix[1].join(' ') + " \n" + "   __________ \n" + "3  " + tictactoeMatrix[2].join(' ');
let exampleMatrix =  "   1   2   3 \n" + "1  " + exampleTictactoeMatrix[0].join(' ') + "\n" + "   __________  \n" + "2  " + exampleTictactoeMatrix[1].join(' ') + " \n" + "   __________ \n" + "3  " + exampleTictactoeMatrix[2].join(' ');



prompt.start();
let count = 0; 
count % 2 === 0 ?  console.log("Player X's turn ") : console.log("Player O's turn");
console.log("Example input: \n" + " 1,2");
console.log("Example output: \n" + exampleMatrix);


console.log("Game Start! \n" + "********************")
console.log(renderMatrix);

prompt.get(['position'], function (err, result) {
  if (err) { return onErr(err); }
  
  placePosition(result.position);
  
});

function onErr(err) {
  console.log(err);
  return;
}



const placePosition = function(positionArr){
  
  tictactoeMatrix[positionArr[0]][positionArr[2]] = "X";
  renderMatrix =  "   1   2   3 \n" + "1  " + tictactoeMatrix[0].join(' ') + "\n" + "   __________  \n" + "2  " + tictactoeMatrix[1].join(' ') + " \n" + "   __________ \n" + "3  " + tictactoeMatrix[2].join(' ');
  console.log(renderMatrix);

  prompt.get(['position'], function (err, result) {
  if (err) { return onErr(err); }
  
  placePosition(result.position);
  
});
  
}