interface BoardValues {
  blackCells: [number, number][];
  whiteCells: [number, number][];
  usedCells: [number, number][];
  blackAvailableCells: [number, number][];
  whiteAvailableCells: [number, number][];
  turn: string;
}

export default BoardValues;