import Link from "next/link";
import { Github } from "@/components/icons";
import { data } from "@/data";

const getYear = () => new Date().getFullYear().toString();

export const Footer = () => (
  <footer className="w-full bg-white">
    <div className="z-40 w-full px-10 py-12 flex items-center justify-between">
      <span className="text-center text-xs leading-5 text-gray-500">
        &copy; {getYear()} Grotto, All rights reserved.
      </span>
      <Link
        key={data.Footer.name}
        href={data.Footer.href}
        className="text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">{data.Footer.name}</span>
        <Github className="h-6 w-6" aria-hidden="true" />
      </Link>
    </div>
  </footer>
);
