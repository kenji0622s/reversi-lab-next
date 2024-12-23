import BoardValues from "@/features/board/board-values";

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
    let newBoardValues: BoardValues;

    if (boardValues.turn === "black") {
      newBoardValues = {
        ...boardValues,
        blackCells: [...boardValues.blackCells, [row, col]],
        turn: "white",
      };
    } else {
      newBoardValues = {
        ...boardValues,
        whiteCells: [...boardValues.whiteCells, [row, col]],
        turn: "black",
      };
    }

    return newBoardValues;
  }
}

export default BoardController;
