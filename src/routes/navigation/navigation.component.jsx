import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import Footer from "../../components/footer/footer.component";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  BodyContainer,
  FooterContainer,
} from "./navigation.styles";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
      <FooterContainer >
        <BodyContainer>
          <NavigationContainer>
            <div>
              <h2>Navigation</h2>
            </div>
            <NavLinks>
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
        <Footer />
      </FooterContainer >
  );
};

export default Navigation;
