import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import PetsPage from "./pages/PetsPage";
import SponsorsPage from "./pages/SponsorsPage";
import SharedLayout from "./components/Layout";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PetsList from "./components/PetsList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />

        <Route path="pets" element={<PetsPage />}>
          <Route path=":category" element={<PetsList />} />
        </Route>

        <Route path="news" element={<NewsPage />} />

        <Route path="sponsors" element={<SponsorsPage />} />

        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
