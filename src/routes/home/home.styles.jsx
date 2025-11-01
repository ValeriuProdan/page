import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 72px);
  background: linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%);
`;

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px);
  padding: 120px 48px 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 80px 24px 60px;
    min-height: auto;
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 80px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 48px;
    text-align: center;
  }

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  
  img {
    width: 360px;
    height: 480px;
    border-radius: 24px;
    object-fit: cover;
    box-shadow: 
      0 20px 60px rgba(99, 102, 241, 0.15),
      0 0 0 1px rgba(226, 232, 240, 0.8);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      transform: translateY(-12px) scale(1.02);
      box-shadow: 
        0 32px 80px rgba(99, 102, 241, 0.25),
        0 0 0 1px rgba(99, 102, 241, 0.2);
    }

    @media (max-width: 968px) {
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      width: 280px;
      height: 360px;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-self: center;

  p {
    font-size: 18px;
    line-height: 1.8;
    color: var(--color-text-light);
    text-align: left;
    max-width: 580px;
    
    @media (max-width: 968px) {
      text-align: center;
      max-width: 100%;
    }
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  @media (max-width: 968px) {
    align-items: center;
  }
`;

export const Tagline = styled.h1`
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 800;
  margin-bottom: 32px;
  color: var(--color-text);
  line-height: 1.1;
  letter-spacing: -0.03em;
  position: relative;
  
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-gradient-end) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 968px) {
    text-align: center;
  }
`;
