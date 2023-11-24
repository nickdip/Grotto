import Link from "next/link";

export const SignInButton = () => (
  <Link href="">
    <p className="shadow-xl inline-flex items-center rounded-full border border-transparent bg-green-700 px-3 sm:px-6 py-2 text-lg sm:text-xl font-lg text-white font-bold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
      Sign In
    </p>
  </Link>
);
