const ForgetPage = ({ setForgetPage }) => {
  return (
    <>
      <h1>Forget your password</h1>
      <input type="email" placeholder="Enter your email" />
      <input type="password" placeholder="Enter your password" />
      <input type="password" placeholder="Confirm password your password" />
      <button onClick={() => setForgetPage(false)}>Back to Login</button>
    </>
  );
};
export default ForgetPage;
