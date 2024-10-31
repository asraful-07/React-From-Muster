import { useEffect, useRef } from "react";

const RefFrom = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleRefForm = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    // Optionally, reset fields after submission
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleRefForm} className="flex flex-col w-1/3 space-y-4">
        <input
          ref={nameRef}
          type="text"
          name="name"
          className="border-2 border-black rounded w-full px-2 py-1"
          placeholder="Name"
        />
        <input
          ref={emailRef}
          type="email"
          name="email"
          className="border-2 border-black rounded w-full px-2 py-1"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          className="border-2 border-black rounded w-full px-2 py-1"
          placeholder="Password"
        />
        <input
          type="submit"
          value="Submit"
          className="border-2 border-black rounded w-full px-2 py-1 bg-purple-600 text-white hover:bg-purple-700"
        />
      </form>
    </div>
  );
};

export default RefFrom;
