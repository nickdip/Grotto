import React from "react";
import Link from "next/link";

export const Navbar = () => {
  const selectedClass =
    "inline-flex items-center border-b-2 border-green-700 px-1 pt-1 text-lg font-medium text-gray-900";
  const nonSelectedClass =
    "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-lg font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700";

  return (
    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
      <Link className={selectedClass} href="/">
        Home
      </Link>
      <Link href="/" className={nonSelectedClass}>
        Services
      </Link>
      <Link href="/" className={nonSelectedClass}>
        Pricing
      </Link>
    </div>
  );
};
