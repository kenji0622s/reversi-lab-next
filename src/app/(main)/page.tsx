import HomeMenuLink from "@/components/home/HomeMenuLink";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-6 mt-12">
      <HomeMenuLink href="/play" label="Play" />
      <HomeMenuLink href="/challenge" label="Challenge" />
      <HomeMenuLink href="/simulation" label="Simulation" />
    </div>
  )
}
