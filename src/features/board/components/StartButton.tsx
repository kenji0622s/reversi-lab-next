interface StartButtonProps {
    gameStart: () => void;
}

export default function StartButton({gameStart}: StartButtonProps) {
  return (
    <button onClick={gameStart} className="bg-emerald-500 text-white px-6 py-2 font-bold rounded-md">Start</button>
  )
}