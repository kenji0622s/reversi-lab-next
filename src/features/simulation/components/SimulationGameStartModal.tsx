import BrainModel from "@/models/brain-model";

interface SimulationGameStartModalProps {
  brains: BrainModel[];
  selectFirstBrain: (brain: BrainModel) => void;
  selectSecondBrain: (brain: BrainModel) => void;
  gameStart: () => void;
}

export default function SimulationGameStartModal({
  brains,
  selectFirstBrain,
  selectSecondBrain,
  gameStart,
}: SimulationGameStartModalProps) {
  return (
    <div className="flex items-center justify-center absolute top-0 left-0 w-full h-screen bg-black bg-opacity-70">
      <div className="flex flex-col items-center gap-8 bg-neutral-50 p-12 rounded-md">
        <select
          className="bg-neutral-50 text-neutral-900 ring-2 ring-neutral-400 px-6 py-2 font-bold rounded-md"
          name=""
          id=""
          onChange={(e) =>
            selectFirstBrain(brains.find((brain) => brain.id === e.target.value)!)
          }
        >
          {brains.map((brain) => (
            <option value={brain.id} key={brain.id}>
              {brain.name}
            </option>
          ))}
        </select>
        <select
          className="bg-neutral-50 text-neutral-900 ring-2 ring-neutral-400 px-6 py-2 font-bold rounded-md"
          name=""
          id=""
          onChange={(e) =>
            selectSecondBrain(brains.find((brain) => brain.id === e.target.value)!)
          }
        >
          {brains.map((brain) => (
            <option value={brain.id} key={brain.id}>
              {brain.name}
            </option>
          ))}
        </select>
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
