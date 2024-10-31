import "./App.css";
// import MyFrom from "./components/MyFrom/MyFrom";
// import Grandpa from "./components/Grandpa/Grandpa";
import RefFrom from "./components/RefFrom/RefFrom";
// import ReusabelFrom from "./components/ReusableFrom/ReusabelFrom";
// import StatefulFrom from "./components/StatefulFrom/StatefulFrom";
// import SimpleFrom from "./components/SimpleFrom/SimpleFrom";

function App() {
  // const handelSingUpSubmit = (data) => {
  //   console.log("sing up data", data);
  // };

  // const handelSingUpProfile = (data) => {
  //   console.log("prfile update data", data);
  // };
  return (
    <>
      <h1 className="text-blue-700">Vite + React</h1>

      {/* <MyFrom></MyFrom> */}

      {/* <Grandpa></Grandpa> */}

      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StatefulFrom></StatefulFrom> */}
      <RefFrom></RefFrom>
      {/* <ReusabelFrom fromTitle={"sing Up"} handelSubmit={handelSingUpSubmit}>
        <div>
          <h2>Sing Up</h2>
          <p>Please sing up right now</p>
        </div>
      </ReusabelFrom>
      <ReusabelFrom
        fromTitle={"profile Update"}
        submitBtnText="Update"
        handelSubmit={handelSingUpProfile}
      >
        <div>
          <h2>Update profile</h2>
          <p>Always keep your profile update</p>
        </div>
      </ReusabelFrom> */}
    </>
  );
}

export default App;
