import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import RootLayouts from "./pages/Root";
import EorrorPage from "./pages/Error";
import AuthPage, { action as authAction } from "./pages/Auth";

function App() {
  // console.log(cartdata);
  // dispatch(getCartData());
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts />,
      errorElement: <EorrorPage />,
      children: [
        { index: true, path: "/", element: <HomePage /> },
        {
          path: "/shop",
          element: <ShopPage />,
        },
        {
          path: "/auth",
          element: <AuthPage />,
          action: authAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
