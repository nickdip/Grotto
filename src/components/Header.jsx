"use client";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Logo } from "@/components/Logo";
import { Burger, Cross } from "@/components/icons";
import { Navbar } from "@/components/Navbar";
import { MobileNavbar } from "@/components/MobileNavbar";
import { SignInButton } from "@/components/SignInButton";

export const Header = () => (
  <header className="z-40 w-full sticky top-0 flex items-center justify-center bg-white">
    <Disclosure as="nav" className="w-full max-w-8xl bg-white">
      {({ open }) => (
        <Fragment>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Cross aria-hidden="true" />
                  ) : (
                    <Burger aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Logo />
                <Navbar />
              </div>
              <div className="absolute inset-y-0 top-2 right-1 sm:right-0 sm:ml-6 sm:flex sm:items-center text-sm">
                <p>Logged in Dummy123</p>
              </div>
            </div>
          </div>
          <MobileNavbar />
        </Fragment>
      )}
    </Disclosure>
  </header>
);
