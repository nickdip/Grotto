"use client";
import { useState } from "react";
import { data } from "@/data"


export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleSubmit = async (event) => {
    event.preventDefault();
    loginUser(email, password)
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {errorMsg && <p>{errorMsg}</p>}
      <div className="w-full">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          {data.SignIn.input.first}
        </label>
        <div className="mt-1">
          <input
            value={email}
            name="email"
            onChange={onChangeEmail}
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="w-full">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          {data.SignIn.input.second}
        </label>
        <div className="mt-1">
          <input
            value={password}
            type="password"
            name="password"
            onChange={onChangePassword}
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-lg font-bold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          {data.SignIn.button}
        </button>
      </div>
    </form>
  );
};
