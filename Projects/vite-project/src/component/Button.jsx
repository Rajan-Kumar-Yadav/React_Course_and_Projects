const Button = ({ isLogin, setIsLogin }) => {
  return (
    <>
      <div className="form-toggle">
        <button
          className={isLogin ? "active" : ""}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={isLogin ? "" : "active"}
          onClick={() => setIsLogin(false)}
        >
          SignUp
        </button>
      </div>
    </>
  );
};
export default Button;
