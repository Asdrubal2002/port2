import React from 'react'

import Icon1 from '../../images/front1.svg';

import Icon2 from '../../images/repo.svg';

import Icon3 from '../../images/back1.svg';

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
            Skills
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Front-End</ServicesH2>
                <ServicesP>Html | Css | Bootstrap | JS</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Projects</ServicesH2>
                <ServicesP>Projects carried out during my career.</ServicesP>
                <BotonGit href='https://github.com/Asdrubal2002?tab=repositories' target="_blank">View projects</BotonGit>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Back-End</ServicesH2>
                <ServicesP>Python | Java | Node | SQL</ServicesP> 
            </ServicesCard>

            


        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services