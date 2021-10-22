import styled from "@emotion/styled";
import logo from "./login-image3.jpg";

export const MyContainer = styled.div`
  display: flex;
`;

export const LeftDiv = styled.div`
  width: 40%;
  background-image: url(${logo});
  background-color: #cccccc;
  background-size: cover;
  background-position: 20% 0%;
`;

export const RightDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30vh;
`;

export const Header = styled.h1`
  font-size: 48px;
  font-weight: bolder;
  margin-bottom: 5vh;
`;
