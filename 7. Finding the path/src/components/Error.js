import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops....!!</h1>
      <h1>Something went wrong bro</h1>
      <h1>{err.status + " : " + err.statusText}</h1>
    </div>
  );
}

export default Error;
