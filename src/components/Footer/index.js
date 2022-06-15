import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SociaLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink

} from './FooterElements'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SociaLogo to="/">Henry Rodriguez</SociaLogo>
                        <WebsiteRights>Henry &copy; {new Date().getFullYear()} Todos los derechos reservados.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="mailto:henryasdrubalrodriguezmorales@gmail.com" aria-label="Email" >
                                <FaMailBulk />
                            </SocialIconLink>

                            <SocialIconLink href="https://instagram.com/asdrubal200000?igshid=YmMyMTA2M2Y=" target="_blank" aria-label="Instagram" >
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href="https://github.com/Asdrubal2002" target="_blank" aria-label="GitHud" >
                                <FaGithub />
                            </SocialIconLink>
                            
                            <SocialIconLink href="https://www.linkedin.com/in/henry-asdr%C3%BAbal-rodr%C3%ADguez-morales-16779b207/" target="_blank" aria-label="LinkedIn" >
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