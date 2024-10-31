import { useEffect, useRef } from "react";

const RefFrom = () => {
  const nameRef = useRef(null);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handelRefFrom = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handelRefFrom}>
        <input ref={nameRef} type="text" name="name" /> <br /> <br />
        <input ref={emailRef} type="email" name="email" /> <br /> <br />
        <input ref={passwordRef} type="password" name="password" /> <br />{" "}
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default RefFrom;
