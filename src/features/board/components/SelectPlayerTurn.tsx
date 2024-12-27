interface SelectPlayerTurnProps {
    playerTurn: string;
    selectPlayerTurn: (turn: string) => void;
}

export default function SelectPlayerTurn({playerTurn, selectPlayerTurn}: SelectPlayerTurnProps) {
  return (
    <div className="flex flex-row gap-4">
      <button onClick={() => selectPlayerTurn("black")} className={`${playerTurn === "black" ? "ring-2 ring-emerald-500  bg-neutral-50 text-neutral-900" : " ring-2 ring-neutral-300 bg-neutral-50 text-neutral-900"} px-6 py-2 font-bold rounded-md`}>先行</button>
      <button onClick={() => selectPlayerTurn("white")} className={`${playerTurn === "white" ? "ring-2 ring-emerald-500 bg-neutral-50 text-neutral-900" : " ring-2 ring-neutral-300 bg-neutral-50 text-neutral-900"} px-6 py-2 font-bold rounded-md`}>後行</button>
    </div>
  )
}