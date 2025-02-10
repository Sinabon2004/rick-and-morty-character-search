import { useCallback, useState } from "react";
import CardsLayout from "./components/CardsLayout";
import Search from "./components/Search";
import { Character, CharactersRequest } from "./types";
import { Pagination } from "./components/Pagination";
import fetchCharacters from "./utils/api";
import { useDebounce } from "./hooks/useDebounce";

export default function App() {
  const [characters, setCharacters] = useState<CharactersRequest | null>(null);
  const [count, setCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debouncedQuery = useCallback(() => {
    if (query.length <= 3) return;
    let charactersCount = 0;
    setIsLoading(true);
    fetchCharacters(query, currentPage)
      .then((characters) => {
        setCharacters(characters);
        charactersCount = characters.info.count;
      })
      .catch(() => {
        setCharacters(null);
      })
      .finally(() => {
        setCount(charactersCount);
        setIsLoading(false);
      });
  }, [query, currentPage]);
  useDebounce({ callbackFn: debouncedQuery, ms: 500 });

  const handleQuery = (query: string) => {
    setQuery(query);
  };

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container pt-8 sm:pt-16 flex flex-col gap-4 sm:gap-8">
      <Search count={count} onQueryUpdate={handleQuery} />
      {isLoading
        ? "skeleton"
        : characters?.results && (
            <CardsLayout characters={characters.results} />
          )}
      {characters?.info?.pages && characters.info.pages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={characters.info.pages}
          onPageChange={handlePage}
        />
      )}
    </div>
  );
}
