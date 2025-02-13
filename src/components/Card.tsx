import { CardProps } from "../types";
import classNames from "classnames";
const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString().replace(/\//g, ".");
};

export default function Card({ character }: CardProps) {
  const formattedDate = formatDate(character.created);

  return (
    <a
      href={character.url}
      className="group px-2 sm:px-4 pt-2 pb-2 sm:pb-4  flex flex-col justify-between 
         shadow-[0px_7px_25px] shadow-secondary-gray/20 
         aspect-[3/1] 
         col-span-6
          lg:col-span-3
           xl:nth-1:col-span-3 xl:nth-2:col-span-3 xl:col-span-2 
           xl:nth-1:text-lg xl:nth-2:text-lg xl:text-md "
    >
      <h3 className={"font-fira-regular "}>
        {character.name} - {character.species}
      </h3>
      <div className={"flex justify-between text-xs"}>
        <h5 className={""}>
          Status:{" "}
          <span
            className={classNames("font-montserrat-bold", {
              "text-primary-green": character.status === "Alive",
              "text-primary-red": character.status === "Dead",
              "text-amber-300": character.status === "unknown",
            })}
          >
            {character.status}
          </span>
        </h5>
        <h5>Created: {formattedDate}</h5>
      </div>
    </a>
  );
}
