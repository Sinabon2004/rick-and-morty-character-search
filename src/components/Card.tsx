import { CardProps } from "../types";

export default function Card({ character }: CardProps) {
  const formattedDate = new Date(character.created)
    .toLocaleDateString()
    .replace(/\//g, ".");
  return (
    <a
      href={character.url}
      className={`group px-2 sm:px-4 pt-2 pb-2 sm:pb-4  flex flex-col justify-between \
         shadow-[0px_7px_25px] shadow-secondary-gray/20 \
         aspect-[3/1] \
         col-span-6
          lg:col-span-3
           xl:nth-1:col-span-3 xl:nth-2:col-span-3 xl:col-span-2 \
           xl:nth-1:text-lg xl:nth-2:text-lg xl:text-md 
                
         `}
    >
      <h3 className={"font-fira-regular "}>
        {character.name} - {character.species}
      </h3>
      <div className={"flex justify-between text-xs"}>
        <h5 className={""}>
          Status:{" "}
          <span
            className={
              "font-montserrat-bold" + character.status === "Alive"
                ? "text-primary-green"
                : character.status === "Dead"
                ? "text-primary-red"
                : "text-amber-300"
            }
          >
            {character.status}
          </span>
        </h5>
        <h5>Created: {formattedDate}</h5>
      </div>
    </a>
  );
}
