"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function PcMenuHomeLink() {
  const pathname = usePathname();
  let title = "Reversi Lab";
  if (pathname === "/play") {
    title = "Play";
  } else if (pathname === "/challenge") {
    title = "Challenge";
  } else if (pathname === "/simulation") {
    title = "Simulation";
  }
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image src="/logo.png" alt="Home" width={36} height={36} />
      <span className="text-3xl font-semibold">{title}</span>
    </Link>
  );
}
