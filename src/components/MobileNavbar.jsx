import React from "react";
import { Disclosure } from "@headlessui/react";

export const MobileNavbar = () => {
  const selectedClass =
    "block border-l-4 border-green-500 bg-green-50 py-2 pl-3 pr-4 text-base font-medium text-green-700";
  const nonSelectedClass =
    "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700";

  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 pt-2 pb-4">
        <Disclosure.Button as="a" href="/" className={selectedClass}>
          Home
        </Disclosure.Button>
        <Disclosure.Button as="a" href="/" className={nonSelectedClass}>
          Services
        </Disclosure.Button>
        <Disclosure.Button as="a" href="/" className={nonSelectedClass}>
          Pricing
        </Disclosure.Button>
      </div>
    </Disclosure.Panel>
  );
};
