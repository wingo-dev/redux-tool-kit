import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Notification from "./components/cart/Notification";
import { useSelector } from "react-redux";

import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import RootLayouts from "./pages/Root";
import EorrorPage from "./pages/Error";

function App() {
  const notification = useSelector((state) => state.ui.notification);
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
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </RouterProvider>
  );
}

export default App;
