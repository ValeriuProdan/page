import styled from "styled-components";
 
export const Box = styled.div`
    margin-top: auto;
    background: var(--color-text);
    width: 100%;
    padding: 80px 48px 60px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
 
    @media (max-width: 768px) {
        padding: 60px 24px 48px;
    }
`;
 
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
`;
 
export const FooterTitle = styled.h1`
    color: rgba(255, 255, 255, 0.95);
    text-align: center;
    margin-bottom: 48px;
    font-size: clamp(24px, 4vw, 32px);
    font-weight: 700;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
        margin-bottom: 40px;
    }
`;
 
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 20px;
`;
 
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(250px, 1fr)
    );
    grid-gap: 40px;
    margin-bottom: 40px;
 
    @media (max-width: 768px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(150px, 1fr)
        );
        grid-gap: 30px;
        margin-bottom: 30px;
    }
`;
 
export const FooterLink = styled.a`
    color: rgba(255, 255, 255, 0.75);
    margin-bottom: 16px;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-block;
 
    &:hover {
        color: #818cf8;
        transform: translateX(4px);
    }
`;
 
export const Heading = styled.p`
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 24px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 16px;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-bottom: 16px;
`;

export const IconLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
        background: rgba(129, 140, 248, 0.2);
        color: #818cf8;
        transform: translateY(-4px) scale(1.1);
        border-color: rgba(129, 140, 248, 0.4);
    }
    
    svg {
        width: 24px;
        height: 24px;
        fill: currentColor;
    }
`;