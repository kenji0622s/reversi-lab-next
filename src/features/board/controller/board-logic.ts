class BoardLogic {
  static getAllDirectionCells(row: number, column: number) {

    const upperLeftCells = [];
    for (let i = 1; i <= 7; i++) {
      if (row - i > 0 && column - i > 0) {
        upperLeftCells.push([row - i, column - i]);
      }
    }

    const upperCells = [];
    for (let i = 1; i <= 7; i++) {
      if (row - i > 0) {
        upperCells.push([row - i, column]);
      }
    }

    const upperRightCells = [];
    for (let i = 1; i <= 7; i++) {
      if (row - i > 0 && column + i <= 8) {
        upperRightCells.push([row - i, column + i]);
      }
    }

    const leftCells = [];
    for (let i = 1; i <= 7; i++) {
      if (column - i > 0) {
        leftCells.push([row, column - i]);
      }
    }

    const rightCells = [];
    for (let i = 1; i <= 7; i++) {
      if (column + i <= 8) {
        rightCells.push([row, column + i]);
      }
    }

    const lowerLeftCells = [];
    for (let i = 1; i <= 7; i++) {
      if (row + i <= 8 && column - i > 0) {
        lowerLeftCells.push([row + i, column - i]);
      }
    }

    const lowerCells = [];
    for (let i = 1; i <= 7; i++) {
      if (row + i <= 8) {
        lowerCells.push([row + i, column]);
      }
    }

    const lowerRightCells = [];
    for (let i = 1; i <= 7; i++) {
      if (row + i <= 8 && column + i <= 8) {
        lowerRightCells.push([row + i, column + i]);
      }
    }

    const allDirectionCells = [
      upperLeftCells,
      upperCells,
      upperRightCells,
      leftCells,
      rightCells,
      lowerLeftCells,
      lowerCells,
      lowerRightCells,
    ];
    return allDirectionCells;
  }

  static singleDirectionReverse(
    singleDirectionCells: number[][],
    blackCells: number[][],
    whiteCells: number[][],
    turn: string
  ) {
    const blackJudges = [];
    for (let i = 0; i < singleDirectionCells.length; i++) {
      blackJudges.push(
        blackCells.some(
          (blackCell) =>
            blackCell[0] === singleDirectionCells[i][0] &&
            blackCell[1] === singleDirectionCells[i][1]
        )
      );
    }
    const whiteJudges = [];
    for (let i = 0; i < singleDirectionCells.length; i++) {
      whiteJudges.push(
        whiteCells.some(
          (whiteCell) =>
            whiteCell[0] === singleDirectionCells[i][0] &&
            whiteCell[1] === singleDirectionCells[i][1]
        )
      );
    }

    if (turn === "black") {
      if (whiteJudges[0] && blackJudges[1]) {
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[0][0] &&
              whiteCell[1] === singleDirectionCells[0][1]
          ),
          1
        );
        blackCells.push(singleDirectionCells[0]);
      }
      if (whiteJudges[0] && whiteJudges[1] && blackJudges[2]) {
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[0][0] &&
              whiteCell[1] === singleDirectionCells[0][1]
          ),
          1
        );
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[1][0] &&
              whiteCell[1] === singleDirectionCells[1][1]
          ),
          1
        );
        blackCells.push(singleDirectionCells[0], singleDirectionCells[1]);
      }
      if (
        whiteJudges[0] &&
        whiteJudges[1] &&
        whiteJudges[2] &&
        blackJudges[3]
      ) {
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[0][0] &&
              whiteCell[1] === singleDirectionCells[0][1]
          ),
          1
        );
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[1][0] &&
              whiteCell[1] === singleDirectionCells[1][1]
          ),
          1
        );
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[2][0] &&
              whiteCell[1] === singleDirectionCells[2][1]
          ),
          1
        );
        blackCells.push(
          singleDirectionCells[0],
          singleDirectionCells[1],
          singleDirectionCells[2]
        );
      }
      if (
        whiteJudges[0] &&
        whiteJudges[1] &&
        whiteJudges[2] &&
        whiteJudges[3] &&
        blackJudges[4]
      ) {
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[0][0] &&
              whiteCell[1] === singleDirectionCells[0][1]
          ),
          1
        );
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[1][0] &&
              whiteCell[1] === singleDirectionCells[1][1]
          ),
          1
        );
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[2][0] &&
              whiteCell[1] === singleDirectionCells[2][1]
          ),
          1
        );
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[3][0] &&
              whiteCell[1] === singleDirectionCells[3][1]
          ),
          1
        );
        blackCells.push(
          singleDirectionCells[0],
          singleDirectionCells[1],
          singleDirectionCells[2],
          singleDirectionCells[3]
        );
      }
      if (
        whiteJudges[0] &&
        whiteJudges[1] &&
        whiteJudges[2] &&
        whiteJudges[3] &&
        whiteJudges[4] &&
        blackJudges[5]
      ) {
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[0][0] &&
              whiteCell[1] === singleDirectionCells[0][1]
          ),
          1
        );
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[1][0] &&
              whiteCell[1] === singleDirectionCells[1][1]
          ),
          1
        );
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[2][0] &&
              whiteCell[1] === singleDirectionCells[2][1]
          ),
          1
        );
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[3][0] &&
              whiteCell[1] === singleDirectionCells[3][1]
          ),
          1
        );
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[4][0] &&
              whiteCell[1] === singleDirectionCells[4][1]
          ),
          1
        );
        blackCells.push(
          singleDirectionCells[0],
          singleDirectionCells[1],
          singleDirectionCells[2],
          singleDirectionCells[3],
          singleDirectionCells[4]
        );
      }
      if (
        whiteJudges[0] &&
        whiteJudges[1] &&
        whiteJudges[2] &&
        whiteJudges[3] &&
        whiteJudges[4] &&
        whiteJudges[5] &&
        blackJudges[6]
      ) {
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[0][0] &&
              whiteCell[1] === singleDirectionCells[0][1]
          ),
          1
        );
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[1][0] &&
              whiteCell[1] === singleDirectionCells[1][1]
          ),
          1
        );
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[2][0] &&
              whiteCell[1] === singleDirectionCells[2][1]
          ),
          1
        );
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[3][0] &&
              whiteCell[1] === singleDirectionCells[3][1]
          ),
          1
        );
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[4][0] &&
              whiteCell[1] === singleDirectionCells[4][1]
          ),
          1
        );
        whiteCells.splice(
          whiteCells.findIndex(
            (whiteCell) =>
              whiteCell[0] === singleDirectionCells[5][0] &&
              whiteCell[1] === singleDirectionCells[5][1]
          ),
          1
        );
        blackCells.push(
          singleDirectionCells[0],
          singleDirectionCells[1],
          singleDirectionCells[2],
          singleDirectionCells[3],
          singleDirectionCells[4],
          singleDirectionCells[5]
        );
      }
    } else {
      if (blackJudges[0] && whiteJudges[1]) {
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[0][0] &&
              blackCell[1] === singleDirectionCells[0][1]
          ),
          1
        );
        whiteCells.push(singleDirectionCells[0]);
      }
      if (blackJudges[0] && blackJudges[1] && whiteJudges[2]) {
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[0][0] &&
              blackCell[1] === singleDirectionCells[0][1]
          ),
          1
        );
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[1][0] &&
              blackCell[1] === singleDirectionCells[1][1]
          ),
          1
        );
        whiteCells.push(singleDirectionCells[0], singleDirectionCells[1]);
      }
      if (
        blackJudges[0] &&
        blackJudges[1] &&
        blackJudges[2] &&
        whiteJudges[3]
      ) {
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[0][0] &&
              blackCell[1] === singleDirectionCells[0][1]
          ),
          1
        );
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[1][0] &&
              blackCell[1] === singleDirectionCells[1][1]
          ),
          1
        );
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[2][0] &&
              blackCell[1] === singleDirectionCells[2][1]
          ),
          1
        );
        whiteCells.push(
          singleDirectionCells[0],
          singleDirectionCells[1],
          singleDirectionCells[2]
        );
      }
      if (
        blackJudges[0] &&
        blackJudges[1] &&
        blackJudges[2] &&
        blackJudges[3] &&
        whiteJudges[4]
      ) {
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[0][0] &&
              blackCell[1] === singleDirectionCells[0][1]
          ),
          1
        );
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[1][0] &&
              blackCell[1] === singleDirectionCells[1][1]
          ),
          1
        );
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[2][0] &&
              blackCell[1] === singleDirectionCells[2][1]
          ),
          1
        );
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[3][0] &&
              blackCell[1] === singleDirectionCells[3][1]
          ),
          1
        );
        whiteCells.push(
          singleDirectionCells[0],
          singleDirectionCells[1],
          singleDirectionCells[2],
          singleDirectionCells[3]
        );
      }
      if (
        blackJudges[0] &&
        blackJudges[1] &&
        blackJudges[2] &&
        blackJudges[3] &&
        blackJudges[4] &&
        whiteJudges[5]
      ) {
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[0][0] &&
              blackCell[1] === singleDirectionCells[0][1]
          ),
          1
        );
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[1][0] &&
              blackCell[1] === singleDirectionCells[1][1]
          ),
          1
        );
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[2][0] &&
              blackCell[1] === singleDirectionCells[2][1]
          ),
          1
        );
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[3][0] &&
              blackCell[1] === singleDirectionCells[3][1]
          ),
          1
        );
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[4][0] &&
              blackCell[1] === singleDirectionCells[4][1]
          ),
          1
        );
        whiteCells.push(
          singleDirectionCells[0],
          singleDirectionCells[1],
          singleDirectionCells[2],
          singleDirectionCells[3],
          singleDirectionCells[4]
        );
      }
      if (
        blackJudges[0] &&
        blackJudges[1] &&
        blackJudges[2] &&
        blackJudges[3] &&
        blackJudges[4] &&
        blackJudges[5] &&
        whiteJudges[6]
      ) {
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[0][0] &&
              blackCell[1] === singleDirectionCells[0][1]
          ),
          1
        );
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[1][0] &&
              blackCell[1] === singleDirectionCells[1][1]
          ),
          1
        );
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[2][0] &&
              blackCell[1] === singleDirectionCells[2][1]
          ),
          1
        );
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[3][0] &&
              blackCell[1] === singleDirectionCells[3][1]
          ),
          1
        );
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[4][0] &&
              blackCell[1] === singleDirectionCells[4][1]
          ),
          1
        );
        blackCells.splice(
          blackCells.findIndex(
            (blackCell) =>
              blackCell[0] === singleDirectionCells[5][0] &&
              blackCell[1] === singleDirectionCells[5][1]
          ),
          1
        );
        whiteCells.push(
          singleDirectionCells[0],
          singleDirectionCells[1],
          singleDirectionCells[2],
          singleDirectionCells[3],
          singleDirectionCells[4],
          singleDirectionCells[5]
        );
      }
    }
  }

  static updateAvailableCells(
    usedCells: number[][]
  ): number[][] {
    const availableCells = [];
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        if (
          !usedCells.some((usedCell) => usedCell[0] === i && usedCell[1] === j)
        ) {
          availableCells.push([i, j]);
        }
      }
    }
    return availableCells;
  }

  static updateBlackAvailableCells(
    availableCells: [number, number][],
    blackCells: [number, number][],
    whiteCells: [number, number][]
  ): [number, number][] {
    const blackAvailableCells = [];
    for (let i = 0; i < availableCells.length; i++) {
      const allDirectionCells = BoardLogic.getAllDirectionCells(
        availableCells[i][0],
        availableCells[i][1]
      );
      for (let j = 0; j < allDirectionCells.length; j++) {
        if (
          BoardLogic.checkSingleDirectionCells(
            allDirectionCells[j] as [number, number][],
            blackCells,
            whiteCells,
            "black"
          )
        ) {
          blackAvailableCells.push(availableCells[i]);
          break;
        }
      }
    }
    return blackAvailableCells;
  }

  static updateWhiteAvailableCells(
    availableCells: [number, number][],
    blackCells: [number, number][],
    whiteCells: [number, number][]
  ): [number, number][] {
    const whiteAvailableCells = [];
    for (let i = 0; i < availableCells.length; i++) {
      const allDirectionCells = BoardLogic.getAllDirectionCells(
        availableCells[i][0],
        availableCells[i][1]
      );
      for (let j = 0; j < allDirectionCells.length; j++) {
        if (
          BoardLogic.checkSingleDirectionCells(
            allDirectionCells[j] as [number, number][],
            blackCells,
            whiteCells,
            "white"
          )
        ) {
          whiteAvailableCells.push(availableCells[i]);
          break;
        }
      }
    }
    return whiteAvailableCells;
  }

  static checkSingleDirectionCells(
    singleDirectionCells: [number, number][],
    blackCells: [number, number][],
    whiteCells: [number, number][],
    player: string
  ) {
    const blackJudges = [];
    for (let i = 0; i < singleDirectionCells.length; i++) {
      blackJudges.push(
        blackCells.some(
          (blackCell) =>
            blackCell[0] === singleDirectionCells[i][0] &&
            blackCell[1] === singleDirectionCells[i][1]
        )
      );
    }
    const whiteJudges = [];
    for (let i = 0; i < singleDirectionCells.length; i++) {
      whiteJudges.push(
        whiteCells.some(
          (whiteCell) =>
            whiteCell[0] === singleDirectionCells[i][0] &&
            whiteCell[1] === singleDirectionCells[i][1]
        )
      );
    }
    if (player === "black") {
      if (whiteJudges[0] && blackJudges[1]) {
        return true;
      }
      if (whiteJudges[0] && whiteJudges[1] && blackJudges[2]) {
        return true;
      }
      if (
        whiteJudges[0] &&
        whiteJudges[1] &&
        whiteJudges[2] &&
        blackJudges[3]
      ) {
        return true;
      }
      if (
        whiteJudges[0] &&
        whiteJudges[1] &&
        whiteJudges[2] &&
        whiteJudges[3] &&
        blackJudges[4]
      ) {
        return true;
      }
      if (
        whiteJudges[0] &&
        whiteJudges[1] &&
        whiteJudges[2] &&
        whiteJudges[3] &&
        whiteJudges[4] &&
        blackJudges[5]
      ) {
        return true;
      }
      if (
        whiteJudges[0] &&
        whiteJudges[1] &&
        whiteJudges[2] &&
        whiteJudges[3] &&
        whiteJudges[4] &&
        whiteJudges[5] &&
        blackJudges[6]
      ) {
        return true;
      }
      return false;
    }
    if (player === "white") {
      if (blackJudges[0] && whiteJudges[1]) {
        return true;
      }
      if (blackJudges[0] && blackJudges[1] && whiteJudges[2]) {
        return true;
      }
      if (
        blackJudges[0] &&
        blackJudges[1] &&
        blackJudges[2] &&
        whiteJudges[3]
      ) {
        return true;
      }
      if (
        blackJudges[0] &&
        blackJudges[1] &&
        blackJudges[2] &&
        blackJudges[3] &&
        whiteJudges[4]
      ) {
        return true;
      }
      if (
        blackJudges[0] &&
        blackJudges[1] &&
        blackJudges[2] &&
        blackJudges[3] &&
        blackJudges[4] &&
        whiteJudges[5]
      ) {
        return true;
      }
      if (
        blackJudges[0] &&
        blackJudges[1] &&
        blackJudges[2] &&
        blackJudges[3] &&
        blackJudges[4] &&
        blackJudges[5] &&
        whiteJudges[6]
      ) {
        return true;
      }
      return false;
    }
  }
}

export default BoardLogic;
