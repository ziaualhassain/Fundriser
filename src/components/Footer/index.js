import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FooterContainer,
         FooterWrap,
         FooterLinksContainer,
         FooterLinksWrapper,
         FooterLinkItems ,
         FooterLinkTitle,
         FooterLink,
         Devnames,
         SocialMedia,
         SocialMediaWrap,
         SocialLogo,
         WebsiteRights,
         SocialIcons,
         SocialIconLink} from './FooterElements';


const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Smart Contract By</FooterLinkTitle>
                           <Devnames> Pulamarasetti Naveen</Devnames>
                    </FooterLinkItems>
                 
                    <FooterLinkItems>
                        <FooterLinkTitle>Developed By</FooterLinkTitle>
                           <Devnames> G.Tony Ratnam</Devnames>          
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>UI/UX developed By</FooterLinkTitle>
                           <Devnames> Shaik Ziaual Hassain </Devnames>          
                    </FooterLinkItems>
                    
                </FooterLinksWrapper>                                     
            </FooterLinksContainer>

            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                           <FooterLinkTitle>Under Guidence Of</FooterLinkTitle>
                           <Devnames> S.Sateesh Kumar  Sir</Devnames>
                           <Devnames> (Assistant. Prof) </Devnames>
                           <Devnames>  RGUKT SKLM CSE </Devnames>                 
                    </FooterLinkItems>
                </FooterLinksWrapper>                                     
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'> Fundriser </SocialLogo>
                    <WebsiteRights> fundriser © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                             <FaTwitter/>
                        </SocialIconLink>

                        <SocialIconLink href="https://github.com/navin9000/reward-based-crowdfunding" target="_blank" aria-label="Github">
                             <FaGithub/>
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                             <FaInstagram/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
};

export default Footer


