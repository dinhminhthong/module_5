import React, { useState, useEffect } from "react";

function Greeting() {
    const [firstName, setFirstName] = useState(
        window.localStorage.getItem("classFirstName") || ""
    );
    const [lastName, setLastName] = useState(
        window.localStorage.getItem("classLastName") || ""
    );

    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);

    useEffect(() => {
        window.localStorage.setItem("classFirstName", firstName);
    }, [firstName]);

    useEffect(() => {
        window.localStorage.setItem("classLastName", lastName);
    }, [lastName]);

    return (
        <>
            <input value={firstName} onChange={handleFirstNameChange} />
            <br />
            <input value={lastName} onChange={handleLastNameChange} />
            <p>
                Hello,{" "}
                <span>
          {firstName} {lastName}
        </span>
            </p>
        </>
    );
}

export default Greeting;
