interface BoardProps {
  blackCells: [number, number][];
  whiteCells: [number, number][];
  blackAvailableCells: [number, number][];
  whiteAvailableCells: [number, number][];
  turn: string;
}

export default function board({ blackCells, whiteCells, blackAvailableCells, whiteAvailableCells, turn }: BoardProps) {
  function getCellStatus(rowIndex: number, colIndex: number): string {
    if (blackCells.map((cell) => cell[0] === rowIndex && cell[1] === colIndex).includes(true)) {
      return "bg-black h-[80%] w-[80%] rounded-full";
    }
    if (whiteCells.map((cell) => cell[0] === rowIndex && cell[1] === colIndex).includes(true)) {
      return "bg-white h-[80%] w-[80%] rounded-full";
    }
    if(turn === "black") {
      if (blackAvailableCells.map((cell) => cell[0] === rowIndex && cell[1] === colIndex).includes(true)) {
        return "bg-yellow-300/50 h-[80%] w-[80%] rounded-sm";
      }
    }
    if(turn === "white") {
      if (whiteAvailableCells.map((cell) => cell[0] === rowIndex && cell[1] === colIndex).includes(true)) {
        return "bg-yellow-300/50 h-[80%] w-[80%] rounded-sm";
      }
    }
    return "";
  }

  return (
    <div>
      <p>{turn}のターン</p>
      <table>
        <tbody>
          {Array.from({ length: 8 }, (_, rowIndex) => (
          <tr key={rowIndex + 1}>
            {Array.from({ length: 8 }, (_, colIndex) => (
              <td key={colIndex + 1} className="w-16 h-16 border border-black bg-emerald-600">
                <div className="flex justify-center items-center h-full w-full">
                  <div
                    className={getCellStatus(rowIndex + 1, colIndex + 1)}
                  >
                    <span className="text-yellow-400">{rowIndex + 1}, {colIndex + 1}</span>
                  </div>
                </div>
              </td>
            ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
