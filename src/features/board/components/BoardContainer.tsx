"use client";

import Board from "@/features/board/components/Board";
import { useState } from "react";
import BoardValues from "@/features/board/board-values";
import BoardController from "@/features/board/controller/board-controller";

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
    const newBoardValuesState = BoardController.selectCell(
      row,
      col,
      boardValuesState
    );
    setBoardValuesState(newBoardValuesState);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Board Container</h1>
      <div className="w-full h-2 bg-red-500"></div>
      <Board boardValuesState={boardValuesState} selectCell={selectCell} />
    </div>
  );
}
