import { useContext } from "react";
import { Outlet } from "react-router-dom";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  BodyContainer,
} from "./navigation.styles";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <BodyContainer>
      <NavigationContainer>
        <div>
          <h2>Navigation</h2>
        </div>
        <NavLinks>
          <NavLink to="/profesional">MY CAREER</NavLink>
          <NavLink to="/pictures">PICTURES</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
        </NavLinks>
      </NavigationContainer>

      <Outlet />
    </BodyContainer>
  );
};

export default Navigation;
