"use client";
import Image from "next/image";
import { useState } from "react";
import getResults from "../../playground/toys";
import data from "../../playground/data.json";

export const Letter = () => {
  const [text, setText] = useState("");

  const [suggestedGifts, setSuggestedGifts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please write a letter to Santa!");
      return;
    }
    let gifts;
    if (data) gifts = getResults(data, text); //these are the four suggested gifts
    console.log(gifts);
    setSuggestedGifts([...gifts]);
  };

  return (
    <div className="w-full mt-8 pl-10 border-4 border-green-600 text-center shadow-lg rounded-lg">
      <Image
        className="object-contain inset-0 z-0 opacity-25"
        src="/christmas-tree.png"
        alt="christmas-tree"
        width={80}
        height={55}
      />
      <div className="overlay-content relative z-10 p-4">
        <form onSubmit={(e) => handleSubmit(e)}>
          <textarea
            placeholder="Dear Santa..."
            rows={6}
            className="p-1 w-full h-full border-0 overflow-auto shadow-0 outline-0 text-xl"
            onChange={(e) => setText(e.target.value)}
          />
          <button aria-label="send-button">
            <Image
              className="object-contain"
              src="/send-button.png"
              alt="send-button"
              width={180}
              height={55}
            />
          </button>
        </form>
      </div>
    </div>
  );
};
