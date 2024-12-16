import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import PetsPage from "./pages/PetsPage";
import SponsorsPage from "./pages/SponsorsPage";
import Header from "./components/Header";

import "./styles/index.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pets" element={<PetsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
