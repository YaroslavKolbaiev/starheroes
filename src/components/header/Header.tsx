import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="h-[var(--header-height)] py-3 bg-gradient-to-r from-neutral-700 to-neutral-900 z-10">
      <nav className="max-w-7xl mx-auto h-full px-4 flex justify-center items-center">
        <Link
          className="text-2xl font-semibold text-white"
          to="/"
          aria-label="Brand"
        >
          STAR HEROES
        </Link>
      </nav>
    </header>
  );
}
