import styled from "styled-components";
import { CenterDiv, FlexLayout } from "../CommonStyles";
import customColors from "../colors";
import customFonts from "../fonts";

export const AuthLayout = styled(FlexLayout)`
  height: 100vh;
  position: relative;
  background-color: ${(props) => customColors.primaryColor};
  font-family: ${({ props }) => customFonts.NaNaYang};
`;

export const LeftWrapper = styled(CenterDiv)`
  --color: ${() => customColors.primaryColor};
  width: 70%;
  height: 100%;
  justify-content: flex-start;
  //background-color: #dcf2f1;
  color: whitesmoke;
  background-color: ${({ props }) => {
    return customColors.primaryColor;
  }};
  //box-shadow: 150px 0  var(--color);
  z-index: 1;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 90%;
    //background-color: orangered;
    box-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
  }
`;

export const CenterWrapper = styled(CenterDiv)`
  width: 10%;
  height: 100%;
  position: relative;
  z-index: 2;
`;
export const RightWraaper = styled(CenterDiv)`
  width: 30%;
  height: 100%;
  background-color: ${({ props }) => {
    return customColors.secondaryColor;
  }};
  position: relative;
  /* background: linear-gradient(to right, #0f1035, #365486); */
`;
export const UserAuthContainer = styled(CenterDiv)`
  z-index: 4;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 5px;
  padding: 3%;
  //opacity: 0.3;
  width: 80%;
  height: 50%;
  /* background-color: ${({ props }) => {
    return customColors.contentBoxColor;
  }}; */
  background-color: whitesmoke;
  right: 60%;
  //box-shadow: -1.2px -1.2px 4px rgb(0, 0, 0, 0.4) inset;

  color: ${({ props }) => {
    return customColors.textColor;
  }};

  & > div:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
    font-size: 1em;
    letter-spacing: 0.1em;
    font-weight: 100;
    margin-bottom: 5%;
  }

  .login-auth-container {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & > form {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 75%;
      & label,
      & input {
        width: 100%;
        margin-bottom: 1%;
      }

      & label {
        height: 1.5em;
        padding-left: 2%;
        font-size: 0.8em;
        font-weight: 600;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      & input {
        width: 97.5%;
        height: 1.6em;
        padding-left: 2%;
        font-size: 0.8em;
        border-radius: 5px;
      }
      & button {
        position: absolute;
        width: 100%;
        padding: 2% 0%;
        letter-spacing: 0.1em;
        bottom: 0;
        border-radius: 5px;
        font-weight: 600;
        font-size: 1em;
        background-color: ${({ props }) => {
          return customColors.primaryColor;
        }};
        color: whitesmoke;
      }
    }
  }
  .login-question-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 1% 0;
    padding-right: 1%;

    width: 100%;
    height: 25%;
    & > button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30%;
      font-size: 0.6em;
      color: black;
      margin: 1% 0;
    }
  }
`;
