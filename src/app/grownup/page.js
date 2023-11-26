//display child's letter (get the data from database)
//display the child's suggested gifts (get the data from database)

import "./style.css";
//style
//components
import { FinishedLetter } from "../../components/FinishedLetter";
import { SuggestedToys } from "@/components/SuggestedToys";
const GrownUp = () => {
  return (
    <div className="parent-page">
      <div>
        <h1>Hello user</h1>
        <FinishedLetter />
      </div>
      <div>
        <SuggestedToys />
      </div>
    </div>
  );
};

export default GrownUp;
