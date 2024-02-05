import React, { useState } from "react";
import * as S from "../../styles/auth_style/AuthStyle";

function UserAuthForm() {
  const [isLogin, setIslogin] = useState(true);

  return (
    <S.UserAuthContainer>
      <div>{isLogin === false ? "Register" : "Login"}</div>
      {isLogin === false ? <div>Register</div> : <LoginForm />}
    </S.UserAuthContainer>
  );
}

function LoginForm() {
  const onSumbit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-auth-container">
      <form onSubmit={onSumbit}>
        <label htmlFor="login-email">Email</label>
        <input id="login-email" />
        <label htmlFor="login-password">Password</label>
        <input id="login-password" type={"password"} />
        <button>Submit</button>
      </form>
      <div className="login-question-container">
        <button>find password</button>
        <button>create new account</button>
      </div>
    </div>
  );
}

export default UserAuthForm;
