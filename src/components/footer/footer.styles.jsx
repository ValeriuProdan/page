
import styled from "styled-components";
 
export const Box = styled.div`
    margin-top: auto;

    background: #303134;
    //position: absolute;
    bottom: 0;
    width: 100%;
 
    @media (max-width: 1000px) {
        // padding: 70px 30px;
    }
`;
 
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1600px;
    margin: 0 auto;
    /* background: red; */
`;
 
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;
 
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(385px, 1fr)
    );
    grid-gap: 20px;
 
    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;
 
export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
 
    &:hover {
        color: #6e7175;
        transition: 200ms ease-in;
    }
`;
 
export const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;