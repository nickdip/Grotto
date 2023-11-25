import Santa from "./components/santa";
import LetterTemplate from "./components/letter";

export default function Letter() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Santa />
      <LetterTemplate />
    </main>
  );
}
