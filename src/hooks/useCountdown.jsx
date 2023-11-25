import { useEffect, useState } from "react";

export const useCountdown = () => {
  const [isXmas, setIsXmas] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const xmasTime = new Date("12/24/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = xmasTime.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(days);

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      setHours(hours);

      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(minutes);

      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(seconds);

      if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        setIsXmas(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { days, hours, minutes, seconds, isXmas };
};
