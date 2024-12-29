"use client";

import BrainModel from "@/models/brain-model";
import BoardValuesModel from "@/models/board-values-model";
import BoardController from "@/features/board/controller/board-controller";
import SimulationBoard from "@/features/simulation/components/SimulaionBoard";
import SimulationBoardInfo from "@/features/simulation/components/SimulationBoardInfo";
import SimulationGameStartModal from "@/features/simulation/components/SimulationGameStartModal";
import { useState } from "react";
import { askBrains } from "@/brains/exportAskBrains";

interface SimulationBoardContainerProps {
  brains: BrainModel[];
}

export default function SimulationBoardContainer({
  brains,
}: SimulationBoardContainerProps) {
  const [selectedFirstBrain, setSelectedFirstBrain] = useState<BrainModel>(
    brains[0]
  );
  const [selectedSecondBrain, setSelectedSecondBrain] = useState<BrainModel>(
    brains[0]
  );
  const askFirstBrain = askBrains[selectedFirstBrain.name];
  const askSecondBrain = askBrains[selectedSecondBrain.name];

  const [isReady, setIsReady] = useState(false);

  function selectFirstBrain(brain: BrainModel) {
    setSelectedFirstBrain(brain);
  }

  function selectSecondBrain(brain: BrainModel) {
    setSelectedSecondBrain(brain);
  }

  async function gameStart() {
    setIsReady(true);
    let count = 0;
    while (count < 5) {
      await simulate();
      console.log("count", count);
      count++;
    }
  }

  const initialBoardValues: BoardValuesModel = {
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
  };

  const [boardValuesState, setBoardValuesState] =
    useState<BoardValuesModel>(initialBoardValues);

  function brainSelectCell(
    boardValuesState: BoardValuesModel
  ): BoardValuesModel {
    const brainAnswerCell = askFirstBrain(boardValuesState);
    const newBoardValuesState = BoardController.updateBoardValues(
      brainAnswerCell[0],
      brainAnswerCell[1],
      boardValuesState
    );
    setBoardValuesState(newBoardValuesState);
    return newBoardValuesState;
  }

  async function simulate() {
    let newBoardValuesState = initialBoardValues;
    setBoardValuesState(() => initialBoardValues);
    let isGameEnd = false;
    while (!isGameEnd) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      newBoardValuesState = brainSelectCell(newBoardValuesState);
      if (
        newBoardValuesState.blackAvailableCells.length === 0 &&
        newBoardValuesState.whiteAvailableCells.length === 0
      ) {
        isGameEnd = true;
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center relative">
      {!isReady && (
        <SimulationGameStartModal
          brains={brains}
          selectFirstBrain={selectFirstBrain}
          selectSecondBrain={selectSecondBrain}
          gameStart={gameStart}
        />
      )}
      <SimulationBoardInfo boardValuesState={boardValuesState} />
      <SimulationBoard boardValuesState={boardValuesState} />
    </div>
  );
}
