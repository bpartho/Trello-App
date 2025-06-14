import { StrictMode } from "react";
import ReactDom from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import reportWebVitals from "./reportWebVitals";
import BoardProvider from "./contexts/Board.jsx";
import ListProvider from "./contexts/List.jsx";
import TaskProvider from "./contexts/Task.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>

  <BoardProvider>
    <ListProvider>
      <TaskProvider>
        <RouterProvider router={router} />,
      </TaskProvider>
    </ListProvider>
  </BoardProvider>
);
reportWebVitals();
