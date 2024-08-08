import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { PageNotFound } from './pages/PageNotFound';
import { HomePage } from './pages/HomePage';
import { HeroPage } from './pages/HeroPage/HeroPage';
import { BgImage } from './components/bg-image';
import { Fader } from './components/section-fader';

export default function App() {
  return (
    <main className="h-screen
       relative
       flex
       flex-col
       "
    >
      <BgImage />

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

          <Fader />
        </div>
      </section>

      <Footer />
    </main>
  );
}
