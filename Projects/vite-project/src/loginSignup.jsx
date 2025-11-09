import { useState } from "react";
import "./app.css";
import LoginPage from "./component/LoginPage";
import SignuPage from "./component/SignuPage";
import Button from "./component/Button";
import ForgetPage from "./component/FogetPage";

function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(true);
  const [forgetPage, setForgetPage] = useState();

  return (
    <>
      <div className="container">
        <div className="form-container">
          {forgetPage ? (
            <ForgetPage setForgetPage={setForgetPage} />
          ) : (
            <>
              <Button isLogin={isLogin} setIsLogin={setIsLogin} />
              {isLogin ? (
                <LoginPage
                  setIsLogin={setIsLogin}
                  setForgetPage={setForgetPage}
                />
              ) : (
                <SignuPage />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default LoginSignUp;
