// Sudoku Solver Project
function isPossibleRow(sudoku, row, number) {
    // This isPossibleRow() function returns true if the 'number'
    // argument is NOT already in the row of the 'sudoku' indexed
    // by the 'row' argument . This would mean that adding the
    // 'number' to the 'row' for this 'sudoku' is a potentially legal move.
    
     for(var col = 0; col < 9; col++) {
        if(sudoku[row][col] === number) {
            return false;
        }
    }
    return true;
}

function isPossibleColumn(sudoku, col, number) {
    // This is a lot like isPossibleRow() above: it returns true if the 'number'
    // argument is NOT already in the column of the 'sudoku' indexed
    // by the 'col' argument . This would mean that adding the
    // 'number' to the 'col' for this 'sudoku' is a potentially legal move.

    for(var row = 0; row < 9; row++) {
        if(sudoku[row][col] === number) {
            return false;
        }
    }
    return true;
}

function isPossibleBlock(sudoku, block, number) {
    // A 'block' is a 3x3 area of the 'sudoku' in which numbers 1 to 9
    // must all be present. There are 9 of these zones in the Sudoku.
    // This method will return true if the 'number' argument is not already
    // in the block of the 'sudoku' specified by the 'block' argument --
    // again indicating a potentially legal move. 
    
    var top=Math.floor(block/3)*3;
    var left=Math.floor(block/3)*3;
    for (var i=top;i<(top+3);i++){
        for(var j=left;j<(left+3);j++){
            if(sudoku[i][j] == number){
                return false;
            }
        }
    }
    return true;
}

function isPossibleNumber(sudoku, row, col, number) {
    // Now you will start using of the other methods you've written above.
    // This method accepts a 'sudoku' puzzle, a 'row' and a 'col' (column), and a
    // possible 'number' to move into that row/column position.
    // Such a move would be possible if: 1) isPossibleRow() returns true for
    // that row, and 2) ifPossibleColumn() returns true for that column, and
    // 3) isPossibleBlock() returns true for the block that sudoku[row][col] is
    // in. 
    
    var block = getCellBlock(row,col);
    var row = isPossibleRow(sudoku,row,number);
    var column = isPossibleColumn(sudoku,col,number);
    if (block == true && row == true && column == true){
    return true;
    }
    else
    return false;
}
function isCorrectRow(sudoku, row) {
    // This method should return true if all the numbers from 1 to 9 are
    // present in the row indexed by the 'row' argument in the 'sudoku'
    // puzzle. It should return false if the row is incomplete or has duplicates.
 
     var sub = sudoku[row].slice(0);
    sub.sort();
    for(var x = 1; x <= 9; x++) {
        if(sub[x-1] !== x) {
            return false;
        }
    }
    return true;
}

function isCorrectColumn(sudoku, col) {
    // This method should return true if all the numbers from 1 to 9
    // are present in the column indexed by the 'col' argument in the
    // 'sudoku' puzzle. It should return false if the column is incomplete
    // or has duplicates.

   var sub = new Array();
for(var x = 0; x < 9; x++) {
  sub.push(sudoku[x][col]);
}
    sub.sort();
    for(var x = 1; x <= 9; x++) {
        if(sub[x-1] !== x) {
            return false;
        }
    }
    return true;
}

function isCorrectBlock(sudoku, block) {
    // This function is very similar to the previous two above except
    // that you will again have to figure out how to index all the elements
    // in the 'sudoku' array for the block specified by the 'block' argument.
    // This function should return true if all the numbers from 1 to 9 are
    // in the block. It should return false if the block is incomplete or
    // contains duplicates.

       var sub = new Array();
    var start_row = Math.floor(block/3)*3;
    var start_col = Math.floor(block%3)*3;
    for(var x = 0; x < 9; x++) {
        sub.push(sudoku[start_row+Math.floor(x/3)][start_col+Math.floor(x%3)]);
    }
    sub.sort();
    for(var x = 1; x <= 9; x++) {
        if(sub[x-1] !== x) {
            return false;
        }
    }
    return true;
}

function isSolved(sudoku) {
    // A sudoku will be solved if all its rows, columns and blocks are correct.
    // Use a combination of the previous three functions -- isCorrectRow(),
    // isCorrectColumn(), and isCorrectBlock() -- to determine if the 'sudoku'
    // is solved and return true if this is the case. If the sudoku is not solved,
    // you should return false.

      for(var x = 0; x < 9; x++) {
        if(!isCorrectRow(sudoku, x) || !isCorrectColumn(sudoku, x) || !isCorrectBlock(sudoku, x)) {
            return false;
        }
    }
    return true;
}


function getCellBlock(row,col) {
	var block_row = Math.floor(row/3);
	var block_col = Math.floor(col/3);
	var block = block_row*3+block_col;
	return block;
}
