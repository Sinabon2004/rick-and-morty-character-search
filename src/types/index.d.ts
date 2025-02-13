import { Character } from "./index.d";
import { ReactElement } from "react";

export interface CardProps {
  isLoading: boolean;
  character: Character;
}

export interface CharactersRequest {
  info: ApiInfo;
  results: Character[];
}

interface ApiInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: string;
  origin: LocationInfo;
  location: LocationInfo;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface LocationInfo {
  name: string;
  url: string;
}
