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
    SocialIconLink

} from './FooterElements'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SociaLogo to="/">Henry Rodriguez</SociaLogo>
                        <WebsiteRights>Henry &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="mailto:henryasdrubalrodriguezmorales@gmail.com" aria-label="Facebook" >
                                <FaMailBulk />
                            </SocialIconLink>

                            <SocialIconLink href="https://www.youtube.com/watch?v=Nl54MJDR2p8&list=LL&index=6" target="_blank" aria-label="Instagram" >
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