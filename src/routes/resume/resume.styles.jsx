import styled from "styled-components";

import { Link } from "react-router-dom";

export const JobsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px 60px;

  @media (max-width: 768px) {
    padding: 0 20px 40px;
    gap: 24px;
  }
`;

export const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px;
  background: var(--color-bg);
  border-radius: 20px;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.05),
    0 20px 40px rgba(0, 0, 0, 0.04);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--color-border);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 4px 6px rgba(0, 0, 0, 0.05),
      0 32px 64px rgba(99, 102, 241, 0.15);
    border-color: rgba(99, 102, 241, 0.3);
  }

  @media (max-width: 768px) {
    padding: 24px;
    gap: 20px;
  }
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  div:first-child {
    font-size: 24px;
    font-weight: 700;
    color: var(--color-text);
  }

  div:nth-child(2) {
    font-size: 18px;
    color: var(--color-primary);
    font-weight: 600;
  }

  div:nth-child(3) {
    font-size: 16px;
    color: var(--color-text-light);
  }

  @media (max-width: 768px) {
    div:first-child {
      font-size: 20px;
    }
    div:nth-child(2) {
      font-size: 16px;
    }
    div:nth-child(3) {
      font-size: 14px;
    }
  }
`;

export const Details = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    font-size: 16px;
    line-height: 1.8;
    color: var(--color-text-light);
    padding-left: 24px;
    position: relative;

    &::before {
      content: "•";
      position: absolute;
      left: 8px;
      color: var(--color-primary);
      font-weight: bold;
      font-size: 20px;
    }

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s ease;

  img {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);

    img {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const HeaderContainer = styled.div`
  padding: 100px 40px 60px;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  color: var(--color-text);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    padding: 80px 24px 48px;
  }
`;
