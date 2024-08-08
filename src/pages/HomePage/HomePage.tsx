import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { getHeroes } from '../../api';
import useFetchData from '../../hooks/useFetchData';
import { Observer } from '../../components/observer';
import { GetHerousResponse, Hero } from '../../types';
import { Heroes } from '../../components/heroes';
import { animationDelay } from '../../utils';
import { StarshipLoader } from '../../loaders';

export function HomePage() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [endOfData, setEndOfData] = useState(false);
  const [page, setPage] = useState(1);

  const {
    isLoading, error, doRequest,
  } = useFetchData<GetHerousResponse>({
    handler: getHeroes,
    onSuccess: ({ results, next }) => {
      if (!next) {
        setEndOfData(true);
      }
      setPage(page + 1);
      setHeroes([...heroes, ...results]);
    },
  });

  useEffect(() => {
    doRequest();
  }, []);

  return (
    <>
      <Helmet>
        <title>Star Heroes</title>

        <meta name="description" content="A Star Wars themed application" />

        <meta name="keywords" content="starwars, jedi, sith" />
      </Helmet>

      <div className="flex
        flex-col
        sm:grid
        sm:grid-cols-2
        grid-flow-row
        auto-rows-max
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
        relative
        "
      >
        {heroes.map((hero) => {
          const delay = animationDelay();
          return (
            <Heroes
              key={hero.id}
              hero={hero}
              delay={delay}
            />
          );
        })}

      </div>

      {isLoading && <StarshipLoader />}

      {error && <p>{error}</p>}

      {/* Observer component is used to implement infinite scrolling */}
      {!endOfData && heroes.length > 0 && <Observer page={page} doRequest={doRequest} />}
    </>
  );
}
