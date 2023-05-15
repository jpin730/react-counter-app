import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App title="Hello world!" />
    <CounterApp value={10} />
  </React.StrictMode>
);
