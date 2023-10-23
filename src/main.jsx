import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Root from "./Root";
import { HashRouter } from "react-router-dom";
import { Provider as RootProvider } from "./Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <RootProvider>
      <Root />
    </RootProvider>
  </HashRouter>
);
