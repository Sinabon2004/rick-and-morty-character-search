import { useState } from "react";
import CardsLayout from "./components/CardsLayout";
import Search from "./components/Search";
import { Character } from "./types";

export default function App() {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const handleCharacters = (characters: Character[] | null): void => {
    setCharacters(characters);
  };

  return (
    <div className="container py-8 sm:py-16 flex flex-col gap-4 sm:gap-8">
      <Search onCharactersUpdate={handleCharacters} />
      <CardsLayout characters={characters} />
    </div>
  );
}
