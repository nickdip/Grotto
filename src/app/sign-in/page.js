import React from "react";
import { data } from "@/data";
import { SignInForm } from "@/components/SignInForm";

export default function SignIn() {
  return (
    <div className="flex min-h-full w-full flex-col py-4 grow shrink-0 px-4 sm:px-6 lg:px-8 lg:py-12">
      <div className="bg-green-600 sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto mt-4 h-14 sm:h-16 w-auto"
          src="/grotto-logo.png"
          alt="grotto-logo"
        />
        <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
          {data.SignIn.heading}
        </h2>
        <h4 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
          {data.SignIn.subheading}
        </h4>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md rounded-lg shadow-xl">
        <div className="bg-white py-6 px-4 sm:px-10">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
