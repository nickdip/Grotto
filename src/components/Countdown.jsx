"use client";
import { useCountdown } from "@/hooks";

export const Countdown = () => {
  const { days, hours, minutes, seconds, isXmas } = useCountdown();

  return (
    <div className="mt-6 flex w-full justify-between items-center text-left text-3xl font-bold text-green-800 sm:text-4xl lg:text-5xl space-x-10">
      <span>
        {days} <span className="text-2xl">{days <= 1 ? "day" : "days"}</span>
      </span>
      <span>
        {hours}{" "}
        <span className="text-2xl">{hours <= 1 ? "hour" : "hours"}</span>
      </span>
      <span>
        {minutes}{" "}
        <span className="text-2xl">{minutes <= 1 ? "minute" : "minutes"}</span>
      </span>
      <span>
        {seconds}{" "}
        <span className="text-2xl">{seconds <= 1 ? "second" : "seconds"}</span>
      </span>
    </div>
  );
};
