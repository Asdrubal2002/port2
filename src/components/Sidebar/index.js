import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
 } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}> 
                        Sobre mi
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Educación
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Proyectos
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Experiencia
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href='https://portafoliohenry.netlify.app/assets/pdf/HV_HenryAsdrubalRodriguezMorales.pdf' target="_blank">
                        Hoja de vida
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar