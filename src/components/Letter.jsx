"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import getResults from "../../playground/toys";
import supabase from "../../src/config/supabaseClient"
import { ToyCard } from "./ToyCard";

export const Letter = () => {

  const [toys, setToys] = useState("")

  const [text, setText] = useState("");

  const [suggestedGifts, setSuggestedGifts] = useState([])

  const [selectedGifts, setSelectedGifts] = useState([])

  useEffect( () => {

    (async function fetchToys() {
      const { data, error } = await supabase.from("toys").select();
  
      if (error) console.log(error)

      if (data) {
        setToys(data);
        console.log(data);
      }
    })()


  }, [])

  const addGifts = (gift) => {
    if (!selectedGifts.includes(gift)) {
      setSelectedGifts([...selectedGifts, gift])
    }
  }

  const removeGifts = (gift) => {
    if (selectedGifts.includes(gift)) {
      let newSelectedGifts = selectedGifts.filter((item) => item !== gift)
      setSelectedGifts([...newSelectedGifts])
    }
  }

  const showRemoveIcon = (gift) => {
    if (selectedGifts.includes(gift)) {
      return (
        <button onClick={() => removeGifts(gift)}>
          <Image
            className="object-contain"
            src="/remove-button.png"
            alt="remove-button"
            width={24}
            height={55}
          />
        </button>
      )
    }
  }


  const setCSS = (gift) => {
    let CSSClass = "flex flex-column flex-wrap content-start justify-center mx-1 my-1"
    if (selectedGifts.includes(gift)) {
      CSSClass += " border-4 border-green-800"
    return CSSClass
  }
}


  const childShowGifts = () => {
    if (suggestedGifts.length) return (
          <>
            <h2 className="text-2xl font-bold">Santa's Suggestions</h2>
            {suggestedGifts.map((gift) => (
              <div className={setCSS(gift)} onClick={() => addGifts(gift)}>
                <>{showRemoveIcon(gift)}</>
                <ToyCard toy={gift} />
                <p> --- </p>
              </div>
              ))}
            <button className="bg-green-600 text-white rounded-lg p-2 m-2" onClick={() => setSuggestedGifts([])}>Send To Santa!</button>
          </>
        )
    else return (<></>)
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please write a letter to Santa!");
      return;
    }
    let gifts
    if (toys) gifts = getResults(toys, text); //these are the four suggested gifts

    // const error = await supabase.from("child").insert(toy)

    // if (error) {
    //   console.log(error);
    // }

    setSuggestedGifts([...gifts]);
  }


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
              className="flex justify-start object-contain"
              src="/send-button.png"
              alt="send-button"
              width={180}
              height={55}
            />
          </button>
        </form>
        {childShowGifts({ suggestedGifts })}

      </div>
    </div>
  )
}
