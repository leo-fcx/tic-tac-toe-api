const EMPTY = '-';

class Board {

  constructor() {
    // TODO: By default size is 3. We may want to pass it as param.
    this.initMatrix(3);
  }

  getColumn(index) {
    const column = [];
    const length = this.matrix.length;

    for(var i = 0; i < length; i++) {
      column.push(this.matrix[i][index]);
    }

    return column;
  }

  getDiagonal(inverted = false) {
    const diagonal = [];
    const length = this.matrix.length;

    for(let i = 0; i < length; i++) {
      diagonal.push(this.matrix[inverted ? length - 1 - i: i][i]);
    }

    return diagonal;

  }

  hasTicTacToe(symbol) {
    for (let i = 0; i < this.matrix.length; i++) {
      if (this.isTicTacToeSet(this.matrix[i], symbol)) return true;
    }

    for (let i = 0; i < this.matrix.length; i++) {
      if (this.isTicTacToeSet(this.getColumn(i), symbol)) return true;
    }

    if (this.isTicTacToeSet(this.getDiagonal(), symbol)) return true;

    if (this.isTicTacToeSet(this.getDiagonal(true), symbol)) return true;
  }

  isTicTacToeSet(row, symbol) {
    return row.length === row
      .map((item) => item === symbol ? 1 : 0)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  initMatrix(size) {
    this.matrix = new Array(size);

    for (let i = 0; i < size; i++) {
      this.matrix[i] = new Array(size).fill(EMPTY);
    }
  }

  mark(position, symbol) {
    const [ row, col ] = position
      .split(',')
      .map((value) => parseInt(value));

    // console.log('>>>', row, col, this.matrix);
    this.checkAvailability(row, col);

    this.matrix[row][col] = symbol;
  }

  checkAvailability(row, col) {
    if (this.matrix[row][col] !== EMPTY) {
      console.log(123123, row, col, this.matrix[row][col]);
      throw 'Cell is already used.';
    }
  }

  print(){
    const length = this.matrix.length;

    for(let i = 0; i < length; i++) {
      console.log(this.matrix[i].join(''));
    }
  }
}

export default Board;
