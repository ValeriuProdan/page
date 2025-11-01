import styled from "styled-components";

export const PicturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

export const PicturesTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 40px;
  color: #333;
  text-align: center;
  line-height: 1.4;
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
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
  background: #f0f0f0;
  grid-row-end: span ${props => props.span || 30};
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
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
