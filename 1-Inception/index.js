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
