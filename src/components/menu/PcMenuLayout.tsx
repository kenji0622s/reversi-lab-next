import PcMenuHomeLink from "@/components/menu/PcMenuHomeLink";
import PcMenuLink from "@/components/menu/PcMenuLink";
export default function PcMenuLayout() {
  return (
    <div className="bg-neutral-200 flex justify-center items-center h-16 border-b-2 border-emerald-500 text-lg">
      <div className="flex justify-between items-center w-3/4">
          <PcMenuHomeLink />
        <div className="flex gap-8 text-lg">
          <PcMenuLink href="/play" label="Play" />
          <PcMenuLink href="/challenge" label="Challenge" />
          <PcMenuLink href="/simulation" label="Simulation" />
        </div>
      </div>
    </div>
  );
}
