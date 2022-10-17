import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background: #010606;

    @media screen and (max-width: 786px){
        height: 1700px;
    }
    @media screen and (max-width: 480px){
        height: 1800px;
    }
  
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    align-items: center;
    padding: 0 50px;
    margin-bottom:30px;





     @media screen and (max-width: 1000px){
         grid-template-columns: 1fr 1fr;
     }

     @media screen and (max-width: 768px){
         grid-template-columns: 1fr;
         padding: 0 20px;
     }

`;

export const ServicesCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    transition: all 0.2s ease-in-out;




    &:hover{
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height: 250px;
    width: 250px;
    margin-bottom: 5px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 100px;

    @media screen and (max-width:480px){
        font-size: 2rem;
    }

`;

export const ServicesH2 = styled.h2`
    font-size:1rem;
    color: white;
`;

