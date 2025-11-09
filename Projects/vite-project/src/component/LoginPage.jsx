import "../app.css";
const LoginPage = ({ setIsLogin, setForgetPage }) => {
  return (
    <>
      <h1>Login Form</h1>
      <input type="email" placeholder="Enter your email" />
      <br />
      <input type="password" placeholder="Enter your password" /> <br /> <br />
      <a href="#" onClick={() => setForgetPage(true)}>
        Forgot password?
      </a>{" "}
      <br />
      <button>Login</button>
      <p>
        Not a member?{" "}
        <a href="#" onClick={() => setIsLogin(false)}>
          Signup now
        </a>
      </p>
    </>
  );
};
export default LoginPage;
