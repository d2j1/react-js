import React, { useState } from "react";

const User = ({name}) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    return (
        <div className="user-card">
            <h2>Name : {name}</h2>
            <p>Location : Delhi</p>
            <p>Contact : 123-456-7890</p>
            <p>Count : {count}</p>
            <p>Count2 : {count2}</p>
        </div>
    );
}

export default User;