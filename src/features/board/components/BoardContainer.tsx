"use client";

import Board from "@/features/board/components/Board";
import { useState } from "react";
import BoardValues from "@/features/board/board-values";
import BoardController from "@/features/board/controller/board-controller";
import BoardInfo from "@/features/board/components/BoardInfo";
export default function BoardContainer() {
  const [boardValuesState, setBoardValuesState] = useState<BoardValues>({
    blackCells: [
      [4, 4],
      [5, 5],
    ],
    whiteCells: [
      [4, 5],
      [5, 4],
    ],
    blackAvailableCells: [
      [3, 5],
      [4, 6],
      [5, 3],
      [6, 4],
    ],
    whiteAvailableCells: [
      [3, 4],
      [4, 3],
      [5, 6],
      [6, 5],
    ],
    turn: "black",
  });

  function selectCell(row: number, col: number) {
    const isAvailable: boolean = BoardController.checkAvailable(
      row,
      col,
      boardValuesState
    );

    if (isAvailable) {
      const newBoardValuesState: BoardValues = BoardController.updateBoardValues(
        row,
        col,
        boardValuesState
      );
      setBoardValuesState(newBoardValuesState);
    } else {
      console.log("not available");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <BoardInfo boardValuesState={boardValuesState} />
      <Board boardValuesState={boardValuesState} selectCell={selectCell} />
    </div>
  );
}
