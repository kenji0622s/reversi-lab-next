"use client";

import Board from "@/features/board/components/Board";
import BoardValuesModel from "@/models/board-values-model";
import BoardController from "@/features/board/controller/board-controller";
import PlayBoardInfo from "@/features/play/components/PlayBoardInfo";
import { useState } from "react";

export default function PlayBoardContainer() {
  const [boardValuesState, setBoardValuesState] = useState<BoardValuesModel>({
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
      const newBoardValuesState = BoardController.updateBoardValues(
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
    <div className="flex flex-col items-center justify-center relative">
      <PlayBoardInfo boardValuesState={boardValuesState} />
      <Board boardValuesState={boardValuesState} selectCell={selectCell} />
    </div>
  );
}
