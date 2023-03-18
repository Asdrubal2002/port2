import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';


import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            <h1>HARM</h1>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about"
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                                >About Me</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="discover"
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                                >Education</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services"
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                                >Skills</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signup"
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                                >Experience</NavLinks>
                            </NavItem>
                            
                        </NavMenu>
                         <NavBtn>
                            <NavBtnLink href='mailto:henryasdrubalrodriguezmorales@gmail.com' target="_blank">
                                Contact
                            </NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar