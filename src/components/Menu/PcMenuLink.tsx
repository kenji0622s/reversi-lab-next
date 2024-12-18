"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface PcMenuLinkProps {
  href: string;
  label: string;
}
export default function PcMenuLink({ href, label }: PcMenuLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={
        isActive
          ? "text-neutral-800 border-b-2 border-emerald-500"
          : "text-neutral-500"
      }
    >
      {label}
    </Link>
  );
}
