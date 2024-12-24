"use client";

import Board from "@/features/board/components/Board";
import { useState } from "react";
import BoardValues from "@/features/board/board-values";
import BoardController from "@/features/board/controller/board-controller";
import BoardInfo from "@/features/board/components/BoardInfo";
import askBrain1   from "@/brains/brain1";
// import askBrain2 from "@/brains/brain2";
interface BoardContainerProps {
  mode: string;
}

export default function BoardContainer({ mode }: BoardContainerProps) {
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
      const newBoardValuesState = BoardController.updateBoardValues(
        row,
        col,
        boardValuesState
      );
      setBoardValuesState(newBoardValuesState);

      if (mode === "challenge" && newBoardValuesState.turn === "white") {
        setTimeout(() => {
          brainSelectCell(newBoardValuesState);
        }, 500);
      }

      if (mode === "simulation") {
        simulate(newBoardValuesState);
      }
    } else {
      console.log("not available");
    }
  }

  function brainSelectCell(boardValuesState: BoardValues): BoardValues {
    const brainAnswerCell = askBrain1(boardValuesState);
    const newBoardValuesState = BoardController.updateBoardValues(
      brainAnswerCell[0],
      brainAnswerCell[1],
      boardValuesState
    );
    setBoardValuesState(newBoardValuesState);
    return newBoardValuesState;
  }

  async function simulate(newBoardValuesState: BoardValues) {
    let simulationBoardValuesState = newBoardValuesState;
    let isGameEnd = false;
    while (!isGameEnd) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      simulationBoardValuesState = brainSelectCell(simulationBoardValuesState);
      isGameEnd =
        simulationBoardValuesState.blackAvailableCells.length === 0 &&
        simulationBoardValuesState.whiteAvailableCells.length === 0;
    }
    console.log(simulationBoardValuesState);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <p>{mode}</p>
      <BoardInfo boardValuesState={boardValuesState} />
      <Board boardValuesState={boardValuesState} selectCell={selectCell} />
    </div>
  );
}
