import BoardValues from "@/features/board/board-values";

class BoardController {
  static selectCell(row: number, col: number, boardValues: BoardValues) {
    console.log(row, col);

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
