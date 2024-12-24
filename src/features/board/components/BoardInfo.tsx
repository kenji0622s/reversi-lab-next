import BoardValues from "@/features/board/board-values";

interface BoardInfoProps {
  boardValuesState: BoardValues;
}

export default function BoardInfo({ boardValuesState }: BoardInfoProps) {
  const {
    turn,
    blackCells,
    whiteCells,
    blackAvailableCells,
    whiteAvailableCells,
  } = boardValuesState;

  const isGameEnd =
    blackAvailableCells.length === 0 && whiteAvailableCells.length === 0;
  function setTurnText() {
    if (isGameEnd) {
      return "ゲーム終了";
    }
    return turn === "black" ? "黒のターン" : "白のターン";
  }

  return (
    <div className="text-center mt-4 mb-4">
      <p className="text-xl font-bold">{setTurnText()}</p>
      <p>
        黒: {blackCells.length} | 白: {whiteCells.length}
      </p>
    </div>
  );
}
