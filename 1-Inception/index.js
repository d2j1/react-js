
const heading1 = React.createElement("h1", { id: "heading1" }, "Heading 1");

    const heading2 = React.createElement("h2", { id: "heading2" }, "Heading 2");

    console.log(heading1); //this will print the heading object and it is not 
    // the normal HTML element and { id: "heading1" } is the prop
      
    const root = ReactDOM.createRoot(document.getElementById("root"));

    const container = React.createElement("div", { id: "container" }, [
      heading1,
      heading2,
    ]);

    root.render(container); // this renders <div> with two headings inside it
    // render converts the React elements into actual DOM elements



    /*

    <div id="parent" >
      <div id="child">
        <h1> </h1>
        <h2> </h2>
      </div>
    </div>

    */

    // above structure will be created using below react code - 

    const parent  = React.createElement("div", {id:"parent"}, 
      React.createElement("div", {id:"child"}, 
        [ React.createElement("h1", {id:"one"}, "Heading latest"), React.createElement("h1", {id:"two"}, "Heading latest 2")]
      )
    );

    root.render(parent);

const person = {
  name: "Akshay",
};

const person2 = {
  name: "Simran",
};

function x() {
  console.log(this); // it will print objects in the console
}

x.call(person); // calling function x on person object
x.call(person2); // calling function x on person2 object
