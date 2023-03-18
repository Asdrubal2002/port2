import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import { SiPlatzi } from "react-icons/si";

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SociaLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,

} from './FooterElements'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SociaLogo to="/">HARM</SociaLogo>
                        <WebsiteRights>Henry &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="mailto:henryasdrubalrodriguezmorales@gmail.com" aria-label="Email" >
                                <FaMailBulk />
                            </SocialIconLink>

                            <SocialIconLink href="https://platzi.com/p/asdrubal-rodriguez-morales/" target="_blank" aria-label="Instagram" >
                                <SiPlatzi />
                            </SocialIconLink>

                            <SocialIconLink href="https://github.com/Asdrubal2002" target="_blank" aria-label="GitHud" >
                                <FaGithub />
                            </SocialIconLink>
                            
                            <SocialIconLink href="https://www.linkedin.com/in/henry-asdrubal-rodr%C3%ADguez-morales-16779b207/" target="_blank" aria-label="LinkedIn" >
                                <FaLinkedin />
                            </SocialIconLink>


                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer