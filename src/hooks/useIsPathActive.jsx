import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { data } from "@/data";

export const useIsPathActive = () => {
  const pathname = usePathname();

  const [isPathActive, setIsPathActive] = useState({
    home: true,
    xmasClock: false,
    services: false,
  });

  useEffect(() => {
    switch (pathname) {
      case "/":
        setIsPathActive({
          home: true,
          xmasClock: false,
          services: false,
        });
        break;
      case "/xmasclock":
        setIsPathActive({
          home: false,
          xmasClock: true,
          services: false,
        });
        break;
      case "/services":
        setIsPathActive({
          home: false,
          xmasClock: false,
          services: true,
        });
        break;
    }
  }, [pathname]);

  data.Navbar[0].isSelected = isPathActive.home;
  data.Navbar[1].isSelected = isPathActive.xmasClock;
  data.Navbar[2].isSelected = isPathActive.services;

  return data.Navbar;
};
