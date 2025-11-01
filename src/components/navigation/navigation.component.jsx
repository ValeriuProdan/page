import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  BodyContainer,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <NavLink to="/">HOME</NavLink>

        <NavLinks>
          <NavLink to="/profesional">EXPERIENCE</NavLink>
          <NavLink to="/pictures">PICTURES</NavLink>
        </NavLinks>
      </NavigationContainer>
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </Fragment>
  );
};

export default Navigation;
