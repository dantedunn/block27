import React, { useState } from "react";

function SignUpForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  return (
    //Return needs a parent of an h2/form like div. HTML element as a parent...
    <div>
      <h2>"Sign Up!"</h2>
      <form></form>
    </div>
  );
}
export default SignUpForm;
