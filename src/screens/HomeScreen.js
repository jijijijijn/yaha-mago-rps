import React from "react";

import * as S from "../styles/home_style/HomeStyle";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <S.HomeLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
        <span>1</span>
        <span>2</span>
      </div>
    </S.HomeLayout>
  );
}

export default HomeScreen;
