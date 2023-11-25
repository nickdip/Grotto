import supabase from "../../config/supabaseClient";
import { useEffect, useState } from "react";

const DbPractice = () => {
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
    <div className="page dbpractice">
      <h1>MY PRACTICE PAGE</h1>
    </div>

    // <div className="page dbpractice">
    //   {fetchError && <p>{fetchError}</p>}
    //   {toys} && (
    //   <div className="toys">
    //     {toys.map((toy) => (
    //       <p>{toy.name}</p>
    //     ))}
    //   </div>
    //   )
    // </div>
  );
};

export default DbPractice;
