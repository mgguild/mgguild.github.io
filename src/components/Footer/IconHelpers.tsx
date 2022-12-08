import React from 'react'
import styled from 'styled-components'
import { Facebook, Send, Twitter, Linkedin, Instagram, HelpCircle, Youtube} from "react-feather"
import { SiDiscord, SiTiktok } from 'react-icons/si' 
import { FaMediumM } from 'react-icons/fa'
import { names } from "components/Footer/types"

const StyledLogo = styled.span`
    & > * {
        color: ${(({theme}) => theme.colors.primary)};
        font-size: 30px;
        // margin: 0 5px;
        // width: 30px;
        // height: 30px;
    }
`

export const SocialIcon:React.FC<{name: string}> = ({ name }) => {
    const { socials } = names;
    const Icon = () => {
        switch(name){
            case socials.facebook:
                return <Facebook />;
            case socials.telegram:
                return <Send />
            case socials.twitter:
                return <Twitter />
            case socials.discord:
                return <SiDiscord />
            case socials.linkedIn:
                return <Linkedin />
            case socials.ig:
                return <Instagram />
            case socials.medium:
                return <FaMediumM />
            case socials.youtube:
                return <Youtube />
            case socials.tiktok:
                return <SiTiktok />
            default: 
                return (
                    <HelpCircle />
                )
        }
    }
    return <StyledLogo>{Icon()}</StyledLogo>
}

