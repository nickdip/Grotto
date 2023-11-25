import Image from "next/image";
import { data } from "@/data";

export default function Home() {
  return (
    <main className="flex items-center flex-col lg:flex-row justify-between mt-4 lg:mt-8 px-4">
      <div className="mx-auto max-w-prose">
        <h1>
          <span className="mt-2 block text-left text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {data.Landing.heading.first}
            <br />
            <span className="text-green-700">{data.Landing.heading.first}</span>
          </span>
        </h1>
        <p className="mt-8 text-lg text-left leading-8 text-gray-500 sm:text-xl lg:text-2xl">
          {data.Landing.intro}
        </p>
      </div>
      <div className="bg-transparent pt-4">
        <Image
          className="bg-transparent"
          width={220}
          height={220}
          src="/santa.png"
          alt="santa"
        />
      </div>
    </main>
  );
}
