import { useEffect, useState } from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const [sucess, setScess] = useState(false);
  const onClickSignup = (event) => {
    event.preventDefault();
    if (name && email && password && confrimPassword) {
      if (password === confrimPassword) {
        setScess(true);
        setName("");
        setEmail("");
        setPassowrd("");
        setConfrimPassword("");
      } else {
        alert("Error : password and confrimPassword must be same");
      }
    } else {
      alert("all filed are medetroy  to fill");
    }
    const removeSucces = setTimeout(() => {
      setScess(false);
    }, 4000);
    return () => clearInterval(removeSucces);
  };

  return (
    <>
      <form onSubmit={onClickSignup}>
        <div className="name-container">
          {sucess ? <h1> Success! You have successfully Signup</h1> : ""}
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {name === "" ? <p className="ative-p"> ❌ Name is required</p> : ""}
        </div>

        <div className="name-container">
          <p>Email</p>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {email === "" ? <p className="ative-p"> ❌ Email is required</p> : ""}
        </div>
        <div className="name-container">
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassowrd(event.target.value)}
          />
          {password === "" ? (
            <p className="ative-p">❌ Password is required</p>
          ) : (
            ""
          )}
        </div>
        <div className="name-container">
          <p>ConfirmPassword</p>
          <input
            type="password"
            id="name"
            placeholder="Enter your confirm password"
            value={confrimPassword}
            onChange={(event) => setConfrimPassword(event.target.value)}
          />
          {confrimPassword === "" ? (
            <p className="ative-p"> ❌ ConfrimPassword is required</p>
          ) : (
            ""
          )}
        </div>
        <button>Sign Up</button>
      </form>
    </>
  );
};
export default SignupForm;
