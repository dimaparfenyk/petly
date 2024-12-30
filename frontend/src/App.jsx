import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import PetsPage from "./pages/PetsPage";
import SponsorsPage from "./pages/SponsorsPage";
import SharedLayout from "./components/Layout";
import PetDetails from "./components/PetDetails";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />

        <Route path="pets" element={<PetsPage />} />
        <Route path="pets/:petId" element={<PetDetails />} />

        <Route path="news" element={<NewsPage />} />

        <Route path="sponsors" element={<SponsorsPage />} />

        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
