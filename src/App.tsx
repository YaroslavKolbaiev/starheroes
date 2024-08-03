import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { PageNotFound } from './pages/PageNotFound';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <main className="h-screen flex flex-col bg-slate-600">
      <Header />

      <section className="grow flex flex-col p-[var(--main-page-padding)]">

        <div className="bg-neutral-800 w-full max-w-7xl max-h-[var(--main-layout-height)] grow overflow-auto mx-auto text-white rounded-lg p-4">
          <Routes>
            <Route path="*" element={<PageNotFound />} />

            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </section>

      <Footer />
    </main>
  );
}
