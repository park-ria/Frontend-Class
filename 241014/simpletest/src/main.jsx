import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // store 안에 있는 값을 뿌림
import App from "./App.jsx";
import store from "./store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
