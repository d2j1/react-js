import React from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from "react-dom";

const heading1 = React.createElement("h1", { id: "heading1" }, "Heading 1");

const heading2 = React.createElement("h2", { id: "heading2" }, "Heading 2");
console.log(document.getElementById("root"));
const root = createRoot(document.getElementById("root"));

console.log(root);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

root.render(container);
