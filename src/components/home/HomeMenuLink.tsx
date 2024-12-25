import Link from "next/link";

interface HomeMenuLinkProps {
  href: string;
  label: string;
}

export default function HomeMenuLink({ href, label }: HomeMenuLinkProps) {
  return (
    <Link href={href} className="w-96 h-16 bg-emerald-500 rounded-lg flex items-center justify-center text-xl font-bold text-neutral-100 shadow-sm hover:bg-emerald-400 transition-colors duration-300">
      {label}
    </Link>
  );
}
