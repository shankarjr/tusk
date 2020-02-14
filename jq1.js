var player1 = prompt("player one: Enter your name , you will be blue");
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt("player two: Enter your name , you will be red");
var player2Color = 'rgb(237, 45, 73)';

var game_on = true
var table = $('table tr');

function reportWin(rowNum,colNum) {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}


function changeColor(rowIndex,colIndex,color) {

  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);


}
function returnColor(rowIndex,colIndex,color) {

  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);


}

function checkBottom(colorIndex) {

    var colorReport = returnColor(5,colIndex);
    for (var row = 5; row > -1; row--) {
      colorReport = returnColor(row,colIndex);
      if (colorReport === 'rgb(128, 128, 128)') {
        return row
      }
    }
}

function colorMatchCheck(one,two,three,four) {

  return (one === two && one === three && one === four && one != 'rgb(128, 128, 128)' && one !== undefined)
}



 
