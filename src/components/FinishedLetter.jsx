import "../app/grownup/style.css";

export const FinishedLetter = (text) => {

  return (
    <div className="finished-letter p-1">
      <p>{text.text}</p>
    </div>
  );
}