import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Home() {
  const games = [
    "https://editor.p5js.org/liron1111/full/zVcvttfav",
    "https://editor.p5js.org/liron1111/full/mEdQGp3iq",
    "https://editor.p5js.org/liron1111/full/gUsW_PQRt",
    "https://editor.p5js.org/liron1111/full/3Nc0OLyPn",
    "https://editor.p5js.org/liron1111/full/CJNDb37JQ",
    "https://editor.p5js.org/liron1111/full/xyI99_kLl",
    "https://editor.p5js.org/liron1111/full/xYiNjZ21I",
    "https://editor.p5js.org/liron1111/full/bBjnsIQDq",
    "https://editor.p5js.org/liron1111/full/RsJNbs5gO",
  ];

  return (
    <div className="flex flex-col gap-2">
      {games.map((game) => (
        <Link href={game} key={game} target="_blank" rel="noreferrer">
          {game}
        </Link>
      ))}
      <ModeToggle />
    </div>
  );
}
