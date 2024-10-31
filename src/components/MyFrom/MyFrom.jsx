import { useState } from "react";

const MyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="w-3/4 m-10">
      <h1 className="text-purple-600 text-2xl font-bold w-1/4 my-2 text-center">
        Sign up
      </h1>
      <div>
        <form onSubmit={handleForm}>
          <input
            onChange={handleName}
            className="border-2 border-black rounded"
            type="text"
            name="name"
          />
          <br />
          <br />
          <input
            onChange={handleEmail}
            className="border-2 border-black rounded"
            type="email"
            name="email"
          />
          <br />
          <br />
          <input
            className="border-2 border-black rounded w-fit text-center"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default MyForm;
