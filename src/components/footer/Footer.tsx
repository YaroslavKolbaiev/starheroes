export function Footer() {
  return (
    <footer className="w-full h-[var(--footer-height)] bg-neutral-800 z-10">
      <div className="mx-auto max-w-7xl h-full px-4">
        <div className="flex items-center h-full justify-center flex-col lg:justify-between lg:flex-row">
          <span className="text-sm text-neutral-400 ">
            ©
            <a href="https://pagedone.io/">Star Heroes</a>

            {' '}
            2024, All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
