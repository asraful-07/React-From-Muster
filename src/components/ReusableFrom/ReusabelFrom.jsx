const ReusabelFrom = ({
  fromTitle,
  handelSubmit,
  submitBtnText = "Submit",
  Children,
}) => {
  const handelLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.name.value,
    };
    handelSubmit(data);
  };

  return (
    <div>
      <h2>{Children}</h2>
      <h2>{fromTitle}</h2>
      <form onSubmit={handelLocalSubmit}>
        <input type="text" name="name" /> <br /> <br />
        <input type="email" name="email" /> <br /> <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReusabelFrom;
