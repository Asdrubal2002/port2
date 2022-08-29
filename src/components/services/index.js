import React from 'react'

import Icon1 from '../../images/tras.svg';

import Icon2 from '../../images/git.svg';

import Icon3 from '../../images/car.svg';

import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    BotonGit
 } from './servicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>
            Proyectos
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Renobas</ServicesH2>
                <ServicesP>Aplicación para el aprovechamiento de material reciclable.</ServicesP> 
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Github</ServicesH2>
                <BotonGit href='https://github.com/Asdrubal2002' target="_blank">Visualizar proyectos</BotonGit>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Comodify</ServicesH2>
                <ServicesP>Aplicación para la mejora de movilidad en la ciudad con Carpooling.</ServicesP>
            </ServicesCard>

            


        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services