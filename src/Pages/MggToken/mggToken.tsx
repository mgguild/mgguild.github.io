import React, { useContext } from 'react'
import { Text, Flex, Heading, Button } from '@metagg/mgg-uikit'
import styled, { ThemeContext } from 'styled-components'
import Page from 'components/layout/Page'
import { SvgProps } from 'components/SvgIcon/types'
import SvgIcon from 'components/SvgIcon/SvgIcon'
import Exchanges from 'config/constants/Exchanges'
import useMedia from 'use-media'
import { BgContainer } from '../../style/Global'
import {
  Card,
  HeadingGlow,
  Btn,
  Icons,
  IconHolder,
  Section,
  LogoHighlightLink
} from './styled'
import { CardContainer, Card as BoxCard } from 'Pages/Partners/styled'
import bgImage from 'assets/background/revTokenBG.png'
import GrowthBG from 'assets/background/GrowthBG.png'
import MGGLogo from 'assets/background/MGGLogo.png'
import EthLogo from 'assets/logo/ETH.png'
import BscLogo from 'assets/logo/BSC.png'
import FantomLogo from 'assets/logo/Fantom.png'
import GuildRwards from './icons/GuildRewards.png'
import GameFiVault from './icons/GameFiVault.png'
import LiquidityRewards from './icons/LiquidityRewards.png'
import Launchpad from './icons/Launchpad.png'
import DAOG from './icons/DAOG.png'


interface IconProps extends SvgProps {
  Img?: string
}

export const Icon: React.FC<IconProps> = (props) => {
  const { Img, width } = props
  return <SvgIcon width={width} Img={Img} />
}

const AdaptTxt = styled(Text)`
  font-size: 1rem;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
  @media screen and (max-width: 300px) {
    font-size: 10px;
  }
`


const MggToken = () => {
  const theme = useContext(ThemeContext)
  const isMobile = useMedia({ maxWidth: 500 })
  return (
    <>
      <Page>

        <BgContainer bgImage={bgImage} bgColor='#140937' size='cover' style={{alignItems: 'center', justifyContent: 'center'}}>
          <Section>
            <HeadingGlow size='xxl' color={theme.colors.primary} glow={theme.colors.primary}>$MGG Token</HeadingGlow>
            <img src={`${MGGLogo}`} style={{maxWidth: '17rem', margin: '1rem auto'}}></img>
            <div style={{maxWidth: '50rem', margin: '0 auto'}}>
              <Heading size={isMobile ? 'l' : 'lg'} style={{margin: '1rem 0', textAlign: 'justify', textAlignLast: 'center', lineHeight: '2rem'}}>
                The $MGG token holds many utilities that generally fuel the overall MGG ecosystem.
                It is an ERC20 and BEP20 utility token designed to synergistically foster growth in
                the crypto space while distributing fair power and rewards among $MGG token holders.
              </Heading>
            </div>
          </Section>
        </BgContainer>


        <BgContainer bgImage={GrowthBG} bgColor='#140937' position='center bottom' style={{flexFlow: 'column'}}>
          <Card>
            <Flex style={{flexFlow: 'row wrap', columnGap: '2rem', justifyContent: 'space-evenly'}}>
              <div>
                <Heading size='xl' color={theme.colors.primary}>$MGG</Heading>
                <Text>Ticker</Text>
              </div>
              <div style={{minWidth: '5rem'}}>
                <Heading size='xl' color={theme.colors.primary}>1 BILLION</Heading>
                <Text>Total Supply</Text>
              </div>
              <div>
                <Heading size='xl' color={theme.colors.primary}>288,424,658</Heading>
                <Text>Circulating Supply</Text>
              </div>
            </Flex>
          </Card>
          <div style={{position: 'relative', margin: '0 auto 3rem auto'}}>
            <Section style={{padding: '4rem 0', rowGap: '3rem'}}>
              <Heading size='xl' color={theme.colors.primary}>What you can do with $MGG Token</Heading>
              <Icons>
                <IconHolder>
                  <Icon Img={GuildRwards} width={120} />
                  <Text>Guild Rewards</Text>
                </IconHolder>
                <IconHolder>
                  <Icon Img={GameFiVault} width={120} />
                  <Text>GameFi Vault</Text>
                </IconHolder>
                <IconHolder>
                  <Icon Img={LiquidityRewards} width={120} />
                  <Text>Liquidity Rewards</Text>
                </IconHolder>
                <IconHolder>
                  <Icon Img={Launchpad} width={120} />
                  <Text>IGO/INO Launchpad</Text>
                </IconHolder>
                <IconHolder>
                  <Icon Img={DAOG} width={120} />
                  <Text>DAO Governance</Text>
                </IconHolder>
              </Icons>
              <Btn disabled>Go To Tokenomics Page</Btn>
            </Section>
            <Section style={{padding: '5rem 0 0 0'}}>
              <Heading size='xl' color={theme.colors.primary}>MGG Contract Address</Heading>
              <Flex style={{flexDirection: 'column', rowGap: '2.5rem', margin: '2rem 0 0 0'}}>
                <div>
                  <a target="_blank" href='https://etherscan.io/address/0x7237c0b30b1355f1b76355582f182f6f04b08740'>
                    <img src={`${EthLogo}`} style={{maxWidth: '12rem', margin: '1rem 0'}}></img>
                    <AdaptTxt>0x7237c0b30b1355f1b76355582f182f6f04b08740</AdaptTxt>
                    <Text color='#00f4fd'>Ethereum (ERC-20)</Text>
                  </a>
                </div>
                <div>
                  <a target="_blank" href='https://bscscan.com/address/0x6125adcab2f171bc70cfe2caecfec5509273a86a'>
                    <img src={`${BscLogo}`} style={{maxWidth: '12rem', margin: '1rem 0'}}></img>
                    <AdaptTxt>0x6125adcab2f171bc70cfe2caecfec5509273a86a</AdaptTxt>
                    <Text color='#00f4fd'>Binance Smart Chain (BEP-20)</Text>
                  </a>
                </div>
                <div>
                  <a target="_blank" href='https://ftmscan.com/address/0xfda8355e8ce22ac44f2d175f4acfec8fac7472d7'>
                    <img src={`${FantomLogo}`} style={{maxWidth: '12rem', margin: '1rem 0'}}></img>
                    <AdaptTxt>0xfda8355e8ce22ac44f2d175f4acfec8fac7472d7</AdaptTxt>
                    <Text color='#00f4fd'>Fantom</Text>
                  </a>
                </div>
              </Flex>
            </Section>
            <Section style={{padding: '5rem 0 0 0'}}>
              <Heading size='xl' color={theme.colors.primary}>BUY $MGG Token</Heading>
              <Flex style={{flexFlow: 'row wrap', justifyContent: 'center'}}>
                {
                  Exchanges.map((exchange) => (
                    <LogoHighlightLink href={exchange.link} target='_blank'>
                        <img width='120px' src={exchange.image} alt='icon-exchange'/>
                    </LogoHighlightLink>
                  ))
                }
              </Flex>
            </Section>
          </div>
        </BgContainer>
      </Page>
    </>
  )
}

export default MggToken