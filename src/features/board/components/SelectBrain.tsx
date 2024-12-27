"use client";
interface Brain {
  id: string;
  name: string;
  endpoint: string;
}

interface SelectBrainProps {
  brains: Brain[];
  selectBrain: (brain: Brain) => void;
}

export default function SelectBrain({ brains, selectBrain }: SelectBrainProps) {
  return (
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
  );
}
