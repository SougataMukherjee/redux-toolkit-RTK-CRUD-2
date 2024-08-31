import { Read } from "./Read";
import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Provider } from "react-redux";
import { store } from "./store.tsx";
import { Create } from "./Create.tsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Read />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/edit/:id",
        element: <Create />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="mx-5">
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
