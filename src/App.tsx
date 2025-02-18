import { Outlet, Route, Routes } from "react-router-dom";

import { siteHref } from "./config/site";
import TestPage from "./pages/test";
import DefaultLayout from "./components/default-layout";

import IndexPage from "@/pages/index";

function App() {
  return (
    <Routes>
      <Route
        element={
          <DefaultLayout>
            <Outlet />
          </DefaultLayout>
        }
      >
        <Route element={<IndexPage />} path={siteHref.home} />
        <Route element={<TestPage />} path={siteHref.test} />
      </Route>
    </Routes>
  );
}

export default App;
