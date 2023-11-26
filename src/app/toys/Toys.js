import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

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
            {toys.map((toy) => (
              <p key={toy.id}>{toy.name}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Toys;
