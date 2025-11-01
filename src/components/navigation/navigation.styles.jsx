import styled from "styled-components";
import { Link } from "react-router-dom";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  flex: 1;
`;

export const NavigationContainer = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    height: 70px;
    padding: 0 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

export const NavLink = styled(Link)`
  padding: 12px 20px;
  cursor: pointer;
  color: #2d3748;
  font-weight: 500;
  font-size: 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #4299e1;
    background: rgba(66, 153, 225, 0.1);
    transform: translateY(-1px);
  }

  &.active {
    color: #4299e1;
    background: rgba(66, 153, 225, 0.15);
  }

  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 13px;
  }
`;
