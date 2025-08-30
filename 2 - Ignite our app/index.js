import React from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from "react-dom";

const heading1 = React.createElement("h1", { id: "heading1", key: "h1" }, "Heading 1");
const heading2 = React.createElement("h2", { id: "heading2", key: "h2" }, "Heading 2");

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

console.log(document.getElementById("root")); 

const root = createRoot(document.getElementById("root"));

console.log(root);


root.render(container);
