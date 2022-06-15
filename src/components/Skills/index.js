import React from 'react'

import Icon1 from '../../images/html.png';

import Icon2 from '../../images/css.png';

import Icon3 from '../../images/js.png';

import Icon4 from '../../images/py.png';

import Icon5 from '../../images/node.png';

import Icon6 from '../../images/git.png';


import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
 } from './servicesElements'

const Skills = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>
            Habilidades
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>HTML</ServicesH2>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>CSS</ServicesH2>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>JS</ServicesH2>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>PYTHON</ServicesH2>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon5}/>
                <ServicesH2>NODE</ServicesH2>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon6}/>
                <ServicesH2>GIT</ServicesH2>
            </ServicesCard>


        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Skills