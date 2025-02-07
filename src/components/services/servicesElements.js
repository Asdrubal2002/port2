import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;

    @media screen and (max-width: 786px){
        height: 1300px;
    }
    @media screen and (max-width: 480px){
        height: 1350px;
    }
  
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    margin-bottom:70px;

     @media screen and (max-width: 1000px){
         grid-template-columns: 1fr 1fr;
     }

     @media screen and (max-width: 768px){
         grid-template-columns: 1fr;
         padding: 0 10px;
     }

`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 380px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 50px;

    @media screen and (max-width:480px){
        font-size: 2rem;
    }

`;

export const ServicesH2 = styled.h2`
    font-size:1rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

export const BotonGit = styled.a`
    border-radius: 50px;
    background : #2B88E0;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin:20px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #000;
        color: #fff;
    }
`;
