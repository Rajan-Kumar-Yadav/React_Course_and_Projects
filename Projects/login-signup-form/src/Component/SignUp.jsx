import { useEffect, useState } from "react";

const SignUp = () => {
  const [inputName, setInputName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);
  const inputNameHandle = (event) => {
    console.log(event.target.value);
    setInputName(event.target.value);
  };
  const inputEmailHandle = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const inputPasswordHandle = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };
  const signupbuttonClick = () => {
    if (inputName === "" || email === "" || password === "") {
      alert("all field are mendetory to fill");
      return;
    }
    setSignup(true);
    setEmail("");
    setPassword("");

    const removeSucces = setTimeout(() => {
      setSignup(false);

      setInputName("");
    }, 4000);
    return () => clearInterval(removeSucces);
  };

  return (
    <>
      <div className="container">
        <h1>Sing Up</h1>
        <form action="#">
          <input
            type="text"
            placeholder="Enter your name"
            value={inputName}
            onChange={inputNameHandle}
          />
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={inputEmailHandle}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={inputPasswordHandle}
          />
          <br />
          <button onClick={signupbuttonClick}>Signup</button>
          {signup ? <p> ✅ {inputName} you have successfully Signup</p> : ""}
        </form>
      </div>
    </>
  );
};
export default SignUp;
