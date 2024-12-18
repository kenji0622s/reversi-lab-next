import Board from "@/features/board/components/board";

const PlayPage = () => {
  const turns = ["black", "white"];
  const turn = turns[Math.floor(Math.random() * turns.length)];
  return (
    <div>
      <h1 className="text-2xl font-bold">Play</h1>
      <Board
        blackCells={[
          [4, 4],
          [5, 5],
        ]}
        whiteCells={[
          [4, 5],
          [5, 4],
        ]}
        blackAvailableCells={[
          [3, 5],
          [4, 6],
          [5, 3],
          [6, 4],
        ]}
        whiteAvailableCells={[
          [3, 4],
          [4, 3],
          [5, 6],
          [6, 5],
        ]}
        turn={turn}
      />
    </div>
  );
};
export default PlayPage;
