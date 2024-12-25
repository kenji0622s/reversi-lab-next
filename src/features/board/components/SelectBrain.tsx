"use client";

import { useState } from "react";

interface SelectBrainProps {
  brains: {
    id: string;
    name: string;
  }[];
}

export default function SelectBrain({ brains }: SelectBrainProps) {
  const [selectedBrain, setSelectedBrain] = useState<string | null>(null);
  return (
    <div>
      <select name="" id="" onChange={(e) => setSelectedBrain(e.target.value)}>
    {brains.map((brain) => (
      <option value={brain.id} key={brain.id}>{brain.name}</option>
    ))}
  </select>
  <p>{selectedBrain}</p></div>
  )
}