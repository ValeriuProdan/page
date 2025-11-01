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
  padding: 32px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
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
    font-weight: 600;
    color: #1a202c;
  }

  div:nth-child(2) {
    font-size: 18px;
    color: #4299e1;
    font-weight: 500;
  }

  div:nth-child(3) {
    font-size: 16px;
    color: #718096;
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
    line-height: 1.7;
    color: #4a5568;
    padding-left: 20px;
    position: relative;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: #4299e1;
      font-weight: bold;
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
  padding: 60px 40px 40px;
  font-size: 36px;
  font-weight: 600;
  color: #1a202c;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  line-height: 1.4;

  @media (max-width: 768px) {
    padding: 40px 20px 30px;
    font-size: 28px;
  }
`;
