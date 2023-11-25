"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import getResults from "../../../../playground/toys";
import data from "../../../../playground/data.json";

export default function LetterTemplate() {
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
    <div className="p-5 border-4 border-green-600 text-center shadow-lg rounded-lg m-5">
      <Image
        className="object-contain inset-0 z-0 opacity-25"
        src="/christmas-tree.png"
        alt="christmas-tree"
        width={50}
        height={55}
      />
      <div className="overlay-content relative z-10 p-4">
        <form onSubmit={(e) => handleSubmit(e)}>
          <textarea
            placeholder="Dear Santa..."
            rows={10}
            cols={15}
            className="p-1"
            onChange={(e) => setText(e.target.value)}
          />
          <button>
            <Image
              className="object-contain"
              src="/send-button.png"
              alt="send-button"
              width={70}
              height={55}
            />
          </button>
        </form>
      </div>
    </div>
  );
}
