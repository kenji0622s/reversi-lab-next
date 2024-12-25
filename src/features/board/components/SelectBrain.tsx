"use client";
interface Brain {
  id: string;
  name: string;
  endpoint: string;
}

interface SelectBrainProps {
  brains: Brain[];
  selectedBrain: Brain;
  selectBrain: (brain: Brain) => void;
}

export default function SelectBrain({ brains, selectedBrain, selectBrain }: SelectBrainProps) {
  console.log(brains);
  return (
    <div>
      <select name="" id="" onChange={(e) => selectBrain(brains.find((brain) => brain.id === e.target.value)!)}>
    {brains.map((brain) => (
      <option value={brain.id} key={brain.id}>{brain.name}</option>
        ))}
      </select>
      <p>{selectedBrain.name}</p>
    </div>
  );
}