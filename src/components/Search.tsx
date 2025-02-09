import { useCallback, useEffect, useRef, useState } from "react";
import { Character } from "../types";
import fetchCharacters from "../utils/api";
import { useDebounce } from "../hooks/useDebounce";

interface SearchProps {
  onCharactersUpdate: (characters: Character[] | null) => void;
}

export default function Search({ onCharactersUpdate }: SearchProps) {
  const [query, setQuery] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const debouncedQuery = useCallback(() => {
    if (query.length > 3) {
      let charactersCount = 0;
      fetchCharacters(query)
        .then((characters) => {
          onCharactersUpdate(characters.results);
          charactersCount = characters.info.count;
          console.log(charactersCount);
        })
        .catch(() => {
          onCharactersUpdate(null);
        })
        .finally(() => {
          setCount(charactersCount);
        });
    }
  }, [query]);

  useDebounce({ callbackFn: debouncedQuery, ms: 500 });

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  return (
    <div className={"w-full flex justify-center "}>
      <div
        className={
          "w-full max-w-full lg:max-w-[600px] flex flex-col gap-1 sm:gap-2 justify-start "
        }
      >
        <input
          ref={searchRef}
          onChange={(e) => setQuery(e.target.value)}
          className={
            "font-fira-bold text-sm sm:text-md  text-primary-purple placeholder:text-primary-purple \
            px-[15px] sm:px-[25px] py-[10px] sm:py-[20px] \
            shadow-[0px_7px_12px] shadow-secondary-gray/20 \
            w-full"
          }
          type="text"
          placeholder="Search characters..."
        />
        <span className={"pl-1 sm:pl-3 font-montserrat-regular text-xs sm:text-sm"}>
          Found characters: {count}
        </span>
      </div>
    </div>
  );
}
