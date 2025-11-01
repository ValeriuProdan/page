import styled from "styled-components";

export const PicturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 48px 80px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  min-height: calc(100vh - 72px);
  background: var(--color-bg);

  @media (max-width: 768px) {
    padding: 80px 24px 60px;
  }
`;

export const PicturesTitle = styled.h2`
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  margin-bottom: 64px;
  color: var(--color-text);
  text-align: center;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const PicturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  grid-auto-rows: 10px;
  gap: 20px;
  width: 100%;
  padding: 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 16px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 8px;
  }
`;

export const PictureItem = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  grid-row-end: span ${props => props.span || 30};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 8px 16px rgba(0, 0, 0, 0.08),
      0 32px 64px rgba(99, 102, 241, 0.12);
    border-color: rgba(99, 102, 241, 0.3);
    z-index: 1;
  }
`;

export const PictureWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  ${PictureItem}:hover & img {
    transform: scale(1.05);
  }
`;
