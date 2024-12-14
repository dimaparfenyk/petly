import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import PetsPage from "./pages/PetsPage/PetsPage";
import SponsorsPage from "./pages/SponsorsPage/SponsorsPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets" element={<PetsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
      </Routes>
    </div>
  );
}

export default App;
