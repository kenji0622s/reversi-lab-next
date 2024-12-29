import BrainModel from "@/models/brain-model";

interface ChallengeGameStartModalProps {
  brains: BrainModel[];
  selectBrain: (brain: BrainModel) => void;
  playerTurn: string;
  selectPlayerTurn: (turn: string) => void;
  gameStart: () => void;
}

export default function ChallengeGameStartModal({
  brains,
  selectBrain,
  playerTurn,
  selectPlayerTurn,
  gameStart,
}: ChallengeGameStartModalProps) {
  return (
    <div className="flex items-center justify-center absolute top-0 left-0 w-full h-screen bg-black bg-opacity-70">
      <div className="flex flex-col items-center gap-8 bg-neutral-50 p-12 rounded-md">
        <select
          className="bg-neutral-50 text-neutral-900 ring-2 ring-neutral-400 px-6 py-2 font-bold rounded-md"
          name=""
          id=""
          onChange={(e) =>
            selectBrain(brains.find((brain) => brain.id === e.target.value)!)
          }
        >
          {brains.map((brain) => (
            <option value={brain.id} key={brain.id}>
              {brain.name}
            </option>
          ))}
        </select>
        <div className="flex flex-row gap-4">
          <button
            onClick={() => selectPlayerTurn("black")}
            className={`${
              playerTurn === "black"
                ? "ring-2 ring-emerald-500  bg-neutral-50 text-neutral-900"
                : " ring-2 ring-neutral-300 bg-neutral-50 text-neutral-900"
            } px-6 py-2 font-bold rounded-md`}
          >
            先行
          </button>
          <button
            onClick={() => selectPlayerTurn("white")}
            className={`${
              playerTurn === "white"
                ? "ring-2 ring-emerald-500 bg-neutral-50 text-neutral-900"
                : " ring-2 ring-neutral-300 bg-neutral-50 text-neutral-900"
            } px-6 py-2 font-bold rounded-md`}
          >
            後行
          </button>
        </div>
        <button
          onClick={gameStart}
          className="bg-emerald-500 text-white px-6 py-2 font-bold rounded-md"
        >
          Start
        </button>
      </div>
    </div>
  );
}
