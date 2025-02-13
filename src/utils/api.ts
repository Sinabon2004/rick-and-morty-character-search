import axios from "axios";
import { CharactersRequest } from "../types";

export default async function fetchCharacters(
  query: string
): Promise<CharactersRequest> {
  try {
    const res = await axios.get<CharactersRequest>(
      `https://rickandmortyapi.com/api/character?name=${query}`
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching characters: ${error.message}`);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
}
