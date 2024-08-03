export function Header() {
  return (
    <header className="relative h-[var(--header-height)] text-sm lg:text-base py-3 bg-gradient-to-r from-neutral-700 to-neutral-900">
      <nav className="max-w-7xl mx-auto h-full px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80" href="/" aria-label="Brand">
            Brand
          </a>

          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border
               shadow-sm  focus:outline-none
             disabled:opacity-50 disabled:pointer-events-none bg-neutral-500 border-neutral-700 text-white
             hover:bg-white/10 focus:bg-white/10"
            >
              <img src="humburger.svg" alt="menuNav" />
            </button>
          </div>
        </div>

        <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <a className="font-medium text-blue-500 focus:outline-none" href="#" aria-current="page">Landing</a>

            <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Account</a>

            <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Work</a>

            <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Blog</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
