import Link from "next/link";

export default function XmasClock() {
  return (
    <div className="relative isolate px-6 pt-2 lg:px-8">
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
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            There are only
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">Countdown</p>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-green-700 sm:text-5xl">
            until Christmas!
          </h1>
          <div className="mt-10">
            <Link
              href="#"
              className="rounded-md bg-green-700 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Grotto now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
