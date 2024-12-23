import BoardValues from "@/features/board/board-values";
import BoardLogic from "@/features/board/controller/board-logic";
class BoardController {
  static checkAvailable(
    row: number,
    col: number,
    boardValues: BoardValues
  ): boolean {
    const isBlackAvailable = boardValues.blackAvailableCells
      .map((cell) => cell[0] === row && cell[1] === col)
      .includes(true);
    const isWhiteAvailable = boardValues.whiteAvailableCells
      .map((cell) => cell[0] === row && cell[1] === col)
      .includes(true);
    const isAvailable =
      (boardValues.turn === "black" && isBlackAvailable) ||
      (boardValues.turn === "white" && isWhiteAvailable);
    return isAvailable;
  }

  static updateBoardValues(
    row: number,
    col: number,
    boardValues: BoardValues
  ): BoardValues {
    const blackCells = boardValues.blackCells;
    const whiteCells = boardValues.whiteCells;
    const usedCells = boardValues.usedCells;
    let turn = boardValues.turn;

    if (turn === "black") {
      blackCells.push([row, col]);
    } else {
      whiteCells.push([row, col]);
    }
    usedCells.push([row, col]);

    const allDirectionCells = BoardLogic.getAllDirectionCells(row, col);
    for (let i = 0; i < allDirectionCells.length; i++) {
      BoardLogic.singleDirectionReverse(
        allDirectionCells[i],
        blackCells,
        whiteCells,
        turn
      );
    }
    const availableCells = BoardLogic.updateAvailableCells(usedCells);
    const blackAvailableCells = BoardLogic.updateBlackAvailableCells(
      availableCells as [number, number][],
      blackCells,
      whiteCells
    );
    const whiteAvailableCells = BoardLogic.updateWhiteAvailableCells(
      availableCells as [number, number][],
      blackCells,
      whiteCells
    );
    if (turn === "black") {
      if (whiteAvailableCells.length > 0) {
        turn = "white";
      }
    } else {
      if (blackAvailableCells.length > 0) {
        turn = "black";
      }
    }
    const newBoardValues = {
      blackCells,
      whiteCells,
      usedCells,
      blackAvailableCells,
      whiteAvailableCells,
      turn,
    };
    console.log("blackCells:", blackCells);
    console.log("whiteCells:", whiteCells);
    console.log("usedCells:", usedCells);
    console.log("blackAvailableCells:", blackAvailableCells);
    console.log("whiteAvailableCells:", whiteAvailableCells);
    console.log("turn:", turn);

    return newBoardValues;
  }
}

export default BoardController;
