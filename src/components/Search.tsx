import {  useEffect, useRef } from "react";

interface SearchProps {
  count: number;
  onQueryUpdate: (query: string) => void;
}

export default function Search({ count, onQueryUpdate }: SearchProps) {
  
  const searchRef = useRef<HTMLInputElement>(null);
  
  
  

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
          onChange={(e) => e.target.value.length >3 && onQueryUpdate(e.target.value)}
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
