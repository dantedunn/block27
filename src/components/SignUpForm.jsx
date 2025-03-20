import React, { useState } from "react";


function SignUpForm({setToken}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: <input />,
            password: <input />,
          }),
        }       
      ); 
      const data = await response.json()
      console.log(data)
      setToken(data.token)

    } catch (error) {
      setError(error.message)
    }
  }

  return (
    //Return needs a parent of an h2/form like div. HTML element as a parent...
    <div>
      <h2>"Sign Up!"</h2>
      {
<p>{setToken}</p>
      }
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          username:{" "}
          <input onChange={(event) => setUserName(event.target.value)} />
        </label>
        <label>
          password:{" "}
          <input onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button id="subButton">Submit</button>
      </form>
    </div>
  );
}
export default SignUpForm;
