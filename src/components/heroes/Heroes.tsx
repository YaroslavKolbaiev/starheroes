import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hero } from '../../types';

export function Heroes({ hero, delay }: { hero: Hero, delay: number }) {
  return (
    <Link to={`/hero/${hero.id}`} className="hover:scale-105 transition-transform duration-150">
      {/* framer motion library is used to animate render of heroes list */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          // delay is used to stagger the animation of each hero
          // so they don't all animate at the same time
          delay,
        }}
        className="px-4 py-12 rounded-lg shadow-md shadow-yellow-300"
      >
        <h2 className="text-2xl font-semibold text-slate-200">{hero.name}</h2>
      </motion.div>
    </Link>
  );
}
