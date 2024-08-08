import { Starship, Film } from '../types';

export const PARENT_NODE_WIDTH = 360;

export const FILM_NODE_WIDTH = 200;

export const STARSHIP_NODE_WIDTH = 180;

export const NODES_GAP = 10;

// Calculate the average width of the film nodes in order to center them
const filmAvgWidth = (filmsLength: number) => (
  ((FILM_NODE_WIDTH + NODES_GAP)
  * (filmsLength - 1)
  + FILM_NODE_WIDTH)
  / filmsLength
);

// Calculate the x position of the parent node based on the number of films
export const parentNodeX = (filmsLength: number) => (
  (filmsLength / 2) * filmAvgWidth(filmsLength) - PARENT_NODE_WIDTH / 2
);

// service for creating film nodes
// it takes an array of films and returns an array of film nodes
// x position is calculated based on the index of the film
export const filmNodesService = (films: Film[]) => films.map((film, index) => ({
  id: `film-${film.id}`,
  type: 'film',
  data: { ...film },
  position: { x: index * (FILM_NODE_WIDTH + NODES_GAP), y: 300 },
}));

// service for creating starship nodes
// it takes an array of starships and returns an array of starship nodes
// x position is calculated based on the index of the starship
export const starshipNodesService = (
  starships: Starship[],
) => starships.map((starship, index) => ({
  id: `starship-${starship.id}`,
  type: 'starship',
  data: { ...starship },
  position: { x: index * (STARSHIP_NODE_WIDTH + NODES_GAP), y: 500 },
}));

// service for creating edge between parent node and film nodes
export const filmEdjesService = (films: Film[]) => films.map((film) => ({
  id: `edge-parent-film-${film.id}`,
  source: 'parent',
  target: `film-${film.id}`,
}));

// service for creating edge between film nodes and starship nodes
// outer flatMap is used to flatten the array of arrays
// inner map is used to create the edge between film and starship
// the time complexity of this function is O(n*m) where n is the number of films
// and m is the number of starships in each film
export const starshipEdjesService = (starships: Starship[]) => starships.flatMap(
  (starship) => starship.films.map((filmId) => ({
    id: `edge-starship-${starship.id}-film-${filmId}`,
    source: `film-${filmId}`,
    target: `starship-${starship.id}`,
    animated: true,
  })),
);
