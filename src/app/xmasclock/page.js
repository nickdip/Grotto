import Link from "next/link";
import { data } from "@/data";
import { Countdown } from "@/components";

export default function XmasClock() {
  return (
    <div className="relative isolate px-6 pt-2 ">
      <div
        className="absolute inset-x-0 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#137036] to-[#527013] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
          }}
        />
      </div>
      <div className="mx-auto py-24 space-y-20">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
          {data.XmasClock.heading.first}
        </h1>
        <Countdown />
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-green-700 sm:text-5xl text-center">
          {data.XmasClock.heading.second}
        </h1>
        <div className="mt-10 text-center">
          <Link
            href="#"
            className="rounded-md bg-green-700 px-8 py-3 text-baseline font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            {data.XmasClock.button}
          </Link>
        </div>
      </div>
    </div>
  );
}
