import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1> About us page</h1>
      <p> This is namaste react about page of the course</p>
      <User name="DJ (functional)" />
      <UserClass name="DJ (Class)" />
    </div>
  );
};

export default About;
