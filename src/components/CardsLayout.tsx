import { Character } from "../types";
import Card from "./Card";

export default function CardsLayout({
  characters,
}: {
  characters: Character[] | null;
}) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {characters &&
        characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
    </div>
  );
}
