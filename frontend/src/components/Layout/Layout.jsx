import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default SharedLayout;
