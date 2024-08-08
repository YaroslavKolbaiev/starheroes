import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  GetHeroResponse, Hero, Film, Starship,
} from '../../types';
import { getHero } from '../../api';
import useFetchData from '../../hooks/useFetchData';
import { HeroGraph } from '../../components/graph/HeroGraph';

// HeroPage component is used to render the hero details page
export function HeroPage() {
  // useParams is used to get the hero ID from the URL
  const { id } = useParams();
  const [hero, setHero] = useState<Hero | null>(null);
  const [films, setFilms] = useState<Film[]>([]);
  const [starships, setStarships] = useState<Starship[]>([]);

  const {
    error, doRequest,
  } = useFetchData<GetHeroResponse>({
    handler: () => getHero(id || ''),

    onSuccess: (heroData) => {
      setHero(heroData.hero);
      setFilms(heroData.films.results);
      setStarships(heroData.starships.results);
    },
  });

  useEffect(() => {
    doRequest();
  }, []);

  return (
    <>
      {/* Helmet is used to set the page title and metadata for SEO */}
      <Helmet>
        <title>{`Star Heroes | ${hero?.name}`}</title>

        <meta name="description" content={`This is a page about ${hero?.name}`} />

        <meta name="keywords" content={`starwars, jedi, sith, ${hero?.name}`} />
      </Helmet>

      { hero && (
      <HeroGraph
        hero={hero}
        films={films}
        starships={starships}
      />
      )}

      {error && <p>{error}</p>}
    </>
  );
}
