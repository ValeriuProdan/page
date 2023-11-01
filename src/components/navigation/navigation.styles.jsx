import styled from "styled-components";
import { Link } from "react-router-dom";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
`;

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 10px 20px;
  background-color: #303134;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  height: 70px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #fff;
`;
