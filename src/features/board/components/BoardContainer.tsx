"use client";

import Board from "@/features/board/components/Board";
import { useState } from "react";
import BoardValues from "@/features/board/board-values";
import BoardController from "@/features/board/controller/board-controller";
import BoardInfo from "@/features/board/components/BoardInfo";
import SelectBrain from "@/features/board/components/SelectBrain";
import StartButton from "@/features/board/components/StartButton";
import SelectPlayerTurn from "@/features/board/components/SelectPlayerTurn";
import { askBrains } from "@/brains/exportAskBrains";

interface BoardContainerProps {
  mode: string;
  brains: Brain[];
}

interface Brain {
  id: string;
  name: string;
  endpoint: string;
}

export default function BoardContainer({ mode, brains }: BoardContainerProps) {
  const [selectedBrain, setSelectedBrain] = useState<Brain>(brains[0]);
  const askBrain = askBrains[selectedBrain.name];
  const [isReady, setIsReady] = useState(false);
  const [playerTurn, setPlayerTurn] = useState("black");
  const brainTurn = playerTurn === "black" ? "white" : "black";

  function selectBrain(brain: Brain) {
    setSelectedBrain(brain); 
  }

  function gameStart() {
    setIsReady(true);
    if(brainTurn === "black") {
      brainSelectCell(boardValuesState);
    }
  }

  function selectPlayerTurn(turn: string) {
    setPlayerTurn(turn);
  }

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

      if (mode === "challenge" && brainTurn === newBoardValuesState.turn) {
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
    const brainAnswerCell = askBrain(boardValuesState);
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
  }

  return (
    <div className="flex flex-col items-center justify-center relative">
      {(mode !== "play" && !isReady) && (
        <div className="flex items-center justify-center absolute top-0 left-0 w-full h-screen bg-black bg-opacity-70">
          <div className="flex flex-col items-center gap-8 bg-neutral-50 p-12 rounded-md">
          <SelectBrain brains={brains}  selectBrain={selectBrain} />
          <SelectPlayerTurn playerTurn={playerTurn} selectPlayerTurn={selectPlayerTurn} />
          <StartButton gameStart={gameStart} />
          </div>
        </div>
      )}
      <BoardInfo boardValuesState={boardValuesState} />
      <Board boardValuesState={boardValuesState} selectCell={selectCell} />
    </div>
  );
}
