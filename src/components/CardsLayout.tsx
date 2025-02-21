import { Character } from "../types";
import Card from "./Card";

export default function CardsLayout({
  characters,
  isLoading,
}: {
  characters: Character[] | null;
  isLoading: boolean;
}) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {characters &&
        characters.map((character) => (

          <Card
            isLoading={isLoading}
            key={character.id}
            character={character}
          />

        ))}
    </div>
  );
}
