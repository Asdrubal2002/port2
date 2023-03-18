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
                        About Me
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Education
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Experience
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href='mailto:henryasdrubalrodriguezmorales@gmail.com' target="_blank">
                        Contact
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar