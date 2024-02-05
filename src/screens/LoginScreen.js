import React, { useRef } from "react";

import * as S from "../styles/auth_style/AuthStyle";
import { styled } from "styled-components";
import UserAuthForm from "../components/auth_components/UserAuthForm";
import Wave from "react-wavify";
import customColors from "../styles/colors";

function LoginScreen() {
  const layoutRef = useRef();
  console.log(window.innerHeight);
  return (
    <S.AuthLayout>
      <S.LeftWrapper>
        <div>계란후라이</div>
      </S.LeftWrapper>
      <S.CenterWrapper>
        <Wave
          fill={customColors.primaryColor}
          paused={false}
          style={{
            position: "absolute",
            display: "flex",
            transformOrigin: "top left",
            transform: "rotate(90deg)",
            left: "140%",
            height: "20%",
            width: "100vh",
            top: "0",
          }}
          options={{
            height: 22,
            amplitude: 20,
            speed: 0.15,
            points: 3,
          }}
        />
      </S.CenterWrapper>
      <S.RightWraaper>
        <UserAuthForm />
      </S.RightWraaper>
    </S.AuthLayout>
  );
}

export default LoginScreen;
