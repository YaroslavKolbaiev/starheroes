export interface Hero {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: number[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: number;
  id: number;
  mass: string;
  name: string;
  skin_color: string;
  species: number[];
  starships: number[];
  url: string;
  vehicles: number[];
}

export interface Film {
  id: number
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  species: number[]
  starships: number[]
  vehicles: number[]
  characters: number[]
  planets: number[]
  url: string
  created: string
  edited: string
}

export interface Starship {
  id: number
  name: string
  model: string
  starship_class: string
  manufacturer: string
  cost_in_credits: string
  length: string
  crew: string
  passengers: string
  max_atmosphering_speed: string
  hyperdrive_rating: string
  MGLT: string
  cargo_capacity: string
  consumables: string
  films: number[]
  pilots: number[]
  url: string
  created: string
  edited: string
}

export interface QueryResponse {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface GetHerousResponse extends QueryResponse {
  results: Hero[];
}

export interface GetFilmsResponse extends QueryResponse {
  results: Film[];
}

export interface GetStarshipsResponse extends QueryResponse {
  results: Starship[];
}

export interface GetHeroResponse {
  hero: Hero;
  films: GetFilmsResponse;
  starships: GetStarshipsResponse;
}

export interface CacheData {
  data: GetHerousResponse;
  timestamp: number;
}

export type LayoutProps = {
  children: React.ReactNode;
};
