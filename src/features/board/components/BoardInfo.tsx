import BoardValues from "@/features/board/board-values";

interface BoardInfoProps {
  boardValuesState: BoardValues;
}

export default function BoardInfo({ boardValuesState }: BoardInfoProps) {
  return (
    <div className="text-center mb-4">
      <p>{boardValuesState.turn}のターン</p>
      <p>黒: {boardValuesState.blackCells.length} 白: {boardValuesState.whiteCells.length}</p>
    </div>
  );
}
