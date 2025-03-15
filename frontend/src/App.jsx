import { Route, Routes } from "react-router-dom";
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";

import SharedLayout from "./components/Layout";
import PetsListContainer from "./components/PetListContainer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import useAuth from "./hooks/useAuth";

const HomePage = lazy(() => import("./pages/HomePage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const PetsPage = lazy(() => import("./pages/PetsPage"));
const SponsorsPage = lazy(() => import("./pages/SponsorsPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <div>Refreshing...</div>;

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />

        <Route path="pets" element={<PetsPage />}>
          <Route path=":category" element={<PetsListContainer />} />
        </Route>
        <Route path="news" element={<NewsPage />} />
        <Route path="sponsors" element={<SponsorsPage />} />
        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectTo="/pets/sell"
              component={<LoginPage />}
            />
          }
        />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="profile"
          element={<PrivateRoute redirectTo="/" component={<ProfilePage />} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
