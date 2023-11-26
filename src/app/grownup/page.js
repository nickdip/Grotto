"use client";
import supabase from "@/config/supabaseClient";
import { useEffect, useState } from "react";
import "./style.css";
//style
//components
import { FinishedLetter } from "../../components/FinishedLetter";
import { ChosenToys } from "@/components/ChosenToys";
import { ToyCard } from "@/components/ToyCard";


const GrownUp = () => {
  const [fetchError, setFetchError] = useState(null);
  const [user, setUser] = useState([]);

  const [chosenToys, setChosenToys] = useState([])

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  function showToys() {
      const tempChosenToys = []
      if (user.present1) tempChosenToys.push(user.present1)
      if (user.present2) tempChosenToys.push(user.present2)
      if (user.present3) tempChosenToys.push(user.present3)
      if (user.present4) tempChosenToys.push(user.present4)

      if (!tempChosenToys.length) return (<p>No toys chosen yet</p>)
      
      return tempChosenToys.map((toy) => {
        return <ToyCard toy={toy} />
      })


  }

  async function fetchUser() {
    const { data, error } = await supabase.from("children").select("*").eq("id", 1)

    console.log(data, "DATA")

    if (error) {
      setFetchError("Could not fetch the user");
      setUser(null);
      console.log(error);
    }
    if (data) {
      setUser(data[0]);
      console.log(data[0]);
    }

    setIsLoading(false)
  }

  if (isLoading) return <div>Loading...</div>;

  console.log(user, "user")

  return (
    <div className="parent-page flex flex-col justify-center content-center">
      <div>
        <h1>Here's your childs letter:</h1>
        <FinishedLetter text={user.letter} />
      </div>
      <div>
        <h1>Your Childs Basket</h1>
        {showToys()}
        <button className="buy-button bg-emerald-500 rounded-sm p-1">
        <p>Buy Now!</p>
      </button>
      </div>
    </div>
  );
};

export default GrownUp