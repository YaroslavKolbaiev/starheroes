import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { PageNotFound } from './pages/PageNotFound';
import { HomePage } from './pages/HomePage';
import { HeroPage } from './pages/HeroPage/HeroPage';

export default function App() {
  return (
    <main className="h-screen
       relative
       flex
       flex-col
       bg-sky-mob
       sm:bg-sky-sm
       md:bg-sky-md
       lg:bg-sky
       bg-cover
       "
    >
      <div className="absolute w-full h-full bg-black opacity-40" />

      <Header />

      <section className="grow flex flex-col p-[var(--main-page-padding)]">

        <div className="bg-neutral-800
          w-full
          max-w-7xl
          relative
          max-h-[var(--main-layout-height)]
          grow
          overflow-auto
          mx-auto
          text-white
          rounded-lg
          p-4
          "
        >
          <Routes>
            <Route path="*" element={<PageNotFound />} />

            <Route path="/" element={<HomePage />} />

            <Route path="/hero/:id" element={<HeroPage />} />
          </Routes>

          <div className="absolute
             bottom-0
             left-0
             right-0
             h-16
             bg-gradient-to-t
             from-neutral-800
             to-transparent
             pointer-events-none
             "
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
