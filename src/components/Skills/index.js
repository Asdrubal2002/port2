import React from 'react'


import Icon1 from '../../images/front.png';

import Icon2 from '../../images/back.png';

import Icon3 from '../../images/sql.png';





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
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Front-End</ServicesH2>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Sql</ServicesH2>
                </ServicesCard>


                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Back-End</ServicesH2>
                </ServicesCard>

                
                




            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Skills