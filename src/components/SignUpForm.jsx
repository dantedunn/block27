import React, { useState } from "react";

function SignUpForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


async function handleSubmit(event) {
  event.preventDefault();
console.log("G'day, Mate!")
}


  return (
    //Return needs a parent of an h2/form like div. HTML element as a parent...
    <div>
      <h2>"Sign Up!"</h2>
      <form onSubmit={(e)=> {handleSubmit(e) }}>
        <label>
          username: <input  onChange={(event) => setUserName(event.target.value)} />
        </label>
        <label >
          password: <input onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button id="subButton" >Submit</button>
      </form>
    </div>
  );
}
export default SignUpForm;
