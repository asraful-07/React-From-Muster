import { useState } from "react";

const StatefulForm = () => {
  const [email, setEmail] = useState("Asraful with Rahat");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleStateForm = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
      // You can handle form submission here if needed
      console.log(email, password, name);
      // Reset the input fields after successful submission
      setEmail("");
      setPassword("");
      setName("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleStateForm}
        className="flex flex-col w-1/3 p-6 border rounded shadow-md"
      >
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Enter name"
          className="border-2 border-gray-300 rounded mb-4 p-2"
        />
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          name="email"
          placeholder="Enter email"
          className="border-2 border-gray-300 rounded mb-4 p-2"
        />
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          name="password"
          required
          placeholder="Enter password"
          className="border-2 border-gray-300 rounded mb-4 p-2"
        />
        <input
          type="submit"
          value="Submit"
          className="bg-purple-600 text-white rounded p-2 hover:bg-purple-700 cursor-pointer"
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default StatefulForm;
