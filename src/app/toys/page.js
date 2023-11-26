"use client";

import supabase from "../../config/supabaseClient";
import { useEffect, useState } from "react";

//components
import { ToyCard } from "../../components/ToyCard";

const Toys = () => {
  // console.log(supabase);

  const [fetchError, setFetchError] = useState(null);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetchToys();
  }, []);

  async function fetchToys() {
    const { data, error } = await supabase.from("toys").select();

    if (error) {
      setFetchError("Could not fetch the toys");
      setToys(null);
      console.log(error);
    }
    if (data) {
      setToys(data);
      console.log(data);
    }
  }

  return (
    <div className="page toys">
      <div>
        {fetchError && <p>{fetchError}</p>}
        {toys && (
          <div className="toys">
            {/* order-by buttons */}
            <div className="toy-grid">
              {toys.map((toy) => (
                // <p>{toy.name}</p>
                <ToyCard key={toy.id} toy={toy} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toys;
