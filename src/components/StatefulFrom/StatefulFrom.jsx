import { useState } from "react";

const StatefulFrom = () => {
  const [email, setEmail] = useState("Asraful with Rahat");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handelStateFrom = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
    }
    console.log(email, password, name);
  };

  const handelEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handelPasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handelNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handelStateFrom}>
        <input
          value={name}
          onChange={handelNameChange}
          type="text"
          name="name"
          placeholder="Enter name"
        />{" "}
        <br /> <br />
        <input
          value={email}
          onChange={handelEmailChange}
          type="email"
          name="email"
          placeholder="Enter email"
        />{" "}
        <br /> <br />
        <input
          value={password}
          onChange={handelPasswordChange}
          type="password"
          name="password"
          required
          placeholder="Enter password"
        />
        <br /> <br />
        <input type="submit" value="submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StatefulFrom;
