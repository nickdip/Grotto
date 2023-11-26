"use client";
import supabase from "@/config/supabaseClient";
import { useEffect, useState } from "react";
import "./style.css";
//style
//components
import { FinishedLetter } from "../../components/FinishedLetter";
import { SuggestedToys } from "@/components/SuggestedToys";
import { ToyCard } from "@/components/ToyCard";
const GrownUp = () => {
  const [fetchError, setFetchError] = useState(null);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const { data, error } = await supabase.from("grown-ups").select();

    if (error) {
      setFetchError("COuld not fetch the user");
      setUser(null);
      console.log(error);
    }
    if (data) {
      setUser(data);
      console.log(data);
    }
  }

  //fetch suggested toys
  //fetch letter

  return (
    <div className="parent-page">
      <div>
        <h1>Hello {user[0].first_name}</h1>
        <FinishedLetter />
      </div>
      <div>
        <h1>SUGGESTED TOYS</h1>
        {/* <ToyCard /> */}
      </div>
    </div>
  );
};

export default GrownUp;
