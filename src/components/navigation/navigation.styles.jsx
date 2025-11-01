import styled from "styled-components";
import { Link } from "react-router-dom";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  flex: 1;
`;

export const NavigationContainer = styled.nav`
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px) saturate(180%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);

  @media (max-width: 768px) {
    height: 64px;
    padding: 0 24px;
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
  padding: 10px 20px;
  cursor: pointer;
  color: var(--color-text);
  font-weight: 500;
  font-size: 15px;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    color: var(--color-primary);
    background: rgba(99, 102, 241, 0.08);
  }

  &.active {
    color: var(--color-primary);
    background: rgba(99, 102, 241, 0.1);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
