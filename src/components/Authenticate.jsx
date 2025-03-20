import { useState } from "react";

function Authenticate({token}) {
  const [error, setError] = useState(null);

  async function handleClick(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>"Authenticate!"</h2>
      <button id="subButton2" onClick={handleClick}>Auth Token</button>
    </div>
  );
}
export default Authenticate;
