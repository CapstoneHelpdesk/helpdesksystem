import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const App = lazy(() => import("./App"));
const Layout = lazy(() => import("./Layout"));
// const Landing = lazy(() => import("./components/Landing"));
// const Dashboard = lazy(() => import("./components/Dashboard"));

const router = createBrowserRouter([
  {
    path: "/helpdesksystem/",
    element: <Layout />,
    children: [
      // { path: "landing", element: <Landing /> },
      // { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center text-lg font-bold">
          Loading...
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
