import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 80px 40px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 60px 20px;
    gap: 40px;
  }
`;

export const ProfileImageContainer = styled.div`
  flex-shrink: 0;
  
  img {
    width: 320px;
    height: 420px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 768px) {
      width: 280px;
      height: 370px;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  max-width: 600px;

  p {
    font-size: 20px;
    line-height: 1.8;
    color: #2d3748;
    text-align: left;
    
    @media (max-width: 768px) {
      font-size: 18px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0;
  }
`;

export const Tagline = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1a202c;
  line-height: 1.3;
  letter-spacing: -0.5px;
  position: relative;
  padding-bottom: 16px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #4299e1 0%, #3182ce 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 26px;
    text-align: center;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
