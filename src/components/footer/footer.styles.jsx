import styled from "styled-components";
 
export const Box = styled.div`
    margin-top: auto;
    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    width: 100%;
    padding: 60px 40px 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
 
    @media (max-width: 768px) {
        padding: 40px 20px 30px;
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
    color: #ffffff;
    text-align: center;
    margin-bottom: 40px;
    font-size: 28px;
    font-weight: 600;
    opacity: 0.95;

    @media (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 30px;
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
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 16px;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
 
    &:hover {
        color: #4299e1;
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