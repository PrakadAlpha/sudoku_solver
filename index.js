// let board = [[".",".",".",".","5",".",".","1","."],
//              [".","4",".","1",".",".",".",".","."],
//              [".",".",".",".",".","3",".",".","5"],
//              ["8",".",".",".",".",".",".","2","."],
//              [".",".","2",".","7",".",".",".","."],
//              [".","1","5",".",".",".",".",".","."],
//              [".",".",".",".",".","2",".",".","."],
//              [".","2",".","9",".",".",".",".","."],
//              [".",".","4",".",".",".",".",".","."]];

// let solveSudoku = (row, col) => {

//   if(row === 9) return true;
//   if(col === 9) return solveSudoku(row + 1, 0);

//   if(board[row][col] === "."){

//     for(let num = 1; num <= 9; num++){
      
//       if(isValid(row, col, `${num}`)){
//         board[row][col] = `${num}`;
//         if(solveSudoku(row, col+1)) 
//           return true;
//         board[row][col] = ".";
//       }
//     }

//   }else{
//    return solveSudoku(row, col+1);
//   }

//   return false;
// }



// function isValid(row,col,num){

//   for (let rowIdx = 0; rowIdx < 9; rowIdx++) if (board[rowIdx][col] === num) return false;
  
//   for (let colIdx = 0; colIdx < 9; colIdx++) if (board[row][colIdx] === num) return false;

//   let squareRowStart = row - (row % 3);
//   let squareColStart = col - (col % 3);
 
//   for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
//     for (let colIdx = 0; colIdx < 3; colIdx++) {
//       if (board[squareRowStart + rowIdx][squareColStart + colIdx] === num) return false;
//     }
//   }

//   return true;
// }

// if(solveSudoku(0,0)){
//   console.log(board);
// }else{
//   console.log('No solution');
// }



const cells = document.getElementsByClassName('cell');

let cellls = Array.from(cells);

for(let cell of cells){

  cell.addEventListener('keydown', function(e){

    let charCode = e.keyCode;

    console.log(charCode);
    

    let charString = String.fromCharCode(charCode);

    switch (charCode) {
      case 97:
        charString = '1';
        break;
      case 98:
        charString = '2';
        break;
      case 99:
        charString = '3';
        break;
      case 100:
        charString = '4';
        break;
      case 101:
        charString = '5';
        break;
      case 102:
        charString = '6';
        break;
      case 103:
        charString = '7';
        break;
      case 104:
        charString = '8';
        break;
      case 105:
        charString = '9';
        break;
      case 8:
        charString = '';
        break;
      case 9:
        let cellIndex  = cellls.indexOf(e.target);
        let nextIndex;
        if(cellIndex == cellls.length - 1){
          nextIndex = cellIndex[0];
        }else{
          nextIndex = cells[cellIndex + 1];
        }      
        nextIndex.select();
        break;
    }

    if(['','1','2','3','4','5','6','7','8','9'].indexOf(charString) > -1)
      e.target.value = charString;

    e.preventDefault();
  });

}


