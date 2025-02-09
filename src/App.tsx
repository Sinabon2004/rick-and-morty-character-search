import { useState } from "react";
import CardsLayout from "./components/CardsLayout";
import Search from "./components/Search";
import { Character } from "./types";

export default function App() {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const handleCharacters = (characters: Character[] | null) => {
    setCharacters(characters);
  };

  
  return (
    <div className="container pt-8 sm:pt-16 flex flex-col gap-4 sm:gap-8">
      <Search onCharactersUpdate={handleCharacters} />
      <CardsLayout characters={characters} />
    </div>
  );
}
