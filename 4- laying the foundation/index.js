import React from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from "react-dom";

const Title1 = () => (
  <div>
    <h2>Main Title</h2>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
);

var xyz = 12;

const HeaderComponent = () => {
  return (
    <div>
      {console.log(xyz)}
      <h1> This is functional component</h1>
      <h2>this is 2nd heading</h2>
    </div>
  );
};

console.log(document.getElementById("root"));
const root = createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
