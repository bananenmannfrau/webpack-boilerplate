import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader";

import { Hello } from "./components/Hello";
import { HelloJS } from "./components/HelloJS.jsx";

const MainComponent = (
  <div>
    <Hello compiler="TypeScript" framework="React" />
    <HelloJS compiler="Babel" framework="React" />
  </div>
);

ReactDOM.render(hot(module)(MainComponent), document.getElementById("app"));
