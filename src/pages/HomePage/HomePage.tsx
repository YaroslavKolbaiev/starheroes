import { useEffect, useRef } from 'react';
import { getHeroes } from '../../api';
import useFetchData from '../../hooks/useFetchData';

export function HomePage() {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const {
    data, isLoading, error, doRequest,
  } = useFetchData(getHeroes);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) => {
  //     if (entry && entry.isIntersecting) {
  //       console.log('Load more items');
  //     }
  //   });
  //   observer.observe(observerRef.current!);
  //   return () => observer.disconnect();
  // }, []);

  useEffect(() => {
    // doRequest();
  }, []);

  return (
    <div className="">
      {isLoading && <p>Loading...</p>}

      {data.map((hero) => (
        <div key={hero.id} className="p-4 border border-gray-300 rounded-lg mb-4">
          <h2 className="text-xl font-semibold">{hero.name}</h2>
        </div>
      ))}

      {error && <p>{error}</p>}

      <div ref={observerRef} className="h-2 w-2" />
    </div>
  );
}
