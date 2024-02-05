import { FlexLayout } from "../CommonStyles";
import styled from "styled-components";
import customFonts from "../fonts";

export const HomeLayout = styled(FlexLayout)`
  background-color: skyblue;
  & > div {
    & > span:first-of-type {
      opacity: 0;
      display: none;
      font-family: ${({ props }) => customFonts.NaNaYang};
    }
    & > span:last-of-type {
      opacity: 0;
      display: none;

      font-family: ${({ props }) => customFonts.JinJiNi};
    }
  }
`;
