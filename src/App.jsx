import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/Rootlayout";
import Home, { HomeLoader } from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Details, { detailsLoader } from "./pages/Details";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={<Home />}
        loader={HomeLoader}
        errorElement={<ErrorPage />}
      />
      <Route
        path="details/:cca"
        element={<Details />}
        loader={detailsLoader}
        errorElement={<ErrorPage />}
      />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
