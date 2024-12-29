"use client";

import Board from "@/features/board/components/Board";
import BrainModel from "@/models/brain-model";
import BoardValuesModel from "@/models/board-values-model";
import BoardController from "@/features/board/controller/board-controller";
import ChallengeBoardInfo from "@/features/challenge/components/ChallengeBoardInfo";
import ChallengeGameStartModal from "@/features/challenge/components/ChallengeGameStartModal";
import { useState } from "react";
import { askBrains } from "@/brains/exportAskBrains";

interface ChallengeBoardContainerProps {
  brains: BrainModel[];
}

export default function ChallengeBoardContainer({
  brains,
}: ChallengeBoardContainerProps) {
  const [selectedBrain, setSelectedBrain] = useState<BrainModel>(brains[0]);
  const askBrain = askBrains[selectedBrain.name];
  const [isReady, setIsReady] = useState(false);
  const [playerTurn, setPlayerTurn] = useState("black");
  const brainTurn = playerTurn === "black" ? "white" : "black";

  function selectBrain(brain: BrainModel) {
    setSelectedBrain(brain);
  }

  function gameStart() {
    setIsReady(true);
    if (brainTurn === "black") {
      brainSelectCell(boardValuesState);
    }
  }

  function selectPlayerTurn(turn: string) {
    setPlayerTurn(turn);
  }

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

      if (brainTurn === newBoardValuesState.turn) {
        setTimeout(() => {
          brainSelectCell(newBoardValuesState);
        }, 500);
      }
    } else {
      console.log("not available");
    }
  }

  function brainSelectCell(
    boardValuesState: BoardValuesModel
  ): BoardValuesModel {
    const brainAnswerCell = askBrain(boardValuesState);
    const newBoardValuesState = BoardController.updateBoardValues(
      brainAnswerCell[0],
      brainAnswerCell[1],
      boardValuesState
    );
    setBoardValuesState(newBoardValuesState);
    return newBoardValuesState;
  }

  return (
    <div className="flex flex-col items-center justify-center relative">
      {!isReady && (
        <ChallengeGameStartModal
          brains={brains}
          selectBrain={selectBrain}
          playerTurn={playerTurn}
          selectPlayerTurn={selectPlayerTurn}
          gameStart={gameStart}
        />
      )}
      <ChallengeBoardInfo boardValuesState={boardValuesState} />
      <Board boardValuesState={boardValuesState} selectCell={selectCell} />
    </div>
  );
}
