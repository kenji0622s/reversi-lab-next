import BoardValuesModel from "@/models/board-values-model";

interface SimulationBoardProps {
  boardValuesState: BoardValuesModel;
}

export default function SimulationBoard({
  boardValuesState,
}: SimulationBoardProps) {
  function getCellStatus(rowIndex: number, colIndex: number): string {
    if (
      boardValuesState.blackCells
        .map((cell) => cell[0] === rowIndex && cell[1] === colIndex)
        .includes(true)
    ) {
      return "bg-black h-[80%] w-[80%] rounded-full";
    }
    if (
      boardValuesState.whiteCells
        .map((cell) => cell[0] === rowIndex && cell[1] === colIndex)
        .includes(true)
    ) {
      return "bg-white h-[80%] w-[80%] rounded-full";
    }
    if (boardValuesState.turn === "black") {
      if (
        boardValuesState.blackAvailableCells
          .map((cell) => cell[0] === rowIndex && cell[1] === colIndex)
          .includes(true)
      ) {
        return "bg-yellow-300/50 h-[80%] w-[80%] rounded-sm";
      }
    }
    if (boardValuesState.turn === "white") {
      if (
        boardValuesState.whiteAvailableCells
          .map((cell) => cell[0] === rowIndex && cell[1] === colIndex)
          .includes(true)
      ) {
        return "bg-yellow-300/50 h-[80%] w-[80%] rounded-sm";
      }
    }
    return "";
  }

  return (
    <table>
      <tbody>
        {Array.from({ length: 8 }, (_, rowIndex) => (
          <tr key={rowIndex + 1}>
            {Array.from({ length: 8 }, (_, colIndex) => (
              <td
                key={colIndex + 1}
                className="w-16 h-16 border border-black bg-[#0BA875]"
              >
                <div className="flex justify-center items-center h-full w-full">
                  <div className={getCellStatus(rowIndex + 1, colIndex + 1)}>
                    {/* <span className="text-yellow-400">
                      {rowIndex + 1}, {colIndex + 1}
                    </span> */}
                  </div>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
