import { Hero } from '../../types';

export function HeroDetails({ hero }: { hero: Hero | null }) {
  return (
    <div className="bg-slate-600">
      <h1>
        Name:

        {hero?.name}
      </h1>

      <p>
        Height:

        {hero?.height}
      </p>

      <p>
        Mass:
        {hero?.mass}
      </p>

      <p>
        Hair Color:

        {hero?.hair_color}
      </p>
    </div>
  );
}
