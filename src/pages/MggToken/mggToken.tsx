import React, { useContext } from 'react'
import { Text, Flex, Heading, Button } from '@metagg/mgg-uikit'
import styled, { ThemeContext } from 'styled-components'
import Page from 'components/layout/Page'
import { BgContainer } from '../../style/Global'
import { SvgProps } from 'components/svgIcon/types'
import SvgIcon from 'components/svgIcon/SvgIcon'

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



const Card = styled.div`
  background-color: #0c012c;
  border: #008ffd 0.15rem solid;
  border-radius: 0.5rem;
  padding: 2rem;
  -moz-box-shadow: inset 0 0 2rem #000000, 0 0.3rem 0.5rem #008ffd;
  -webkit-box-shadow: inset 0 0 2rem #000000, 0 0.3rem 0.5rem #008ffd;
  box-shadow: inset 0 0 2rem #000000, 0 0.3rem 0.5rem #008ffd;
  z-index: 3;
`

const HeadingGlow = styled(Heading)<{ glow?: string }>`
  text-shadow: 0 0 0.5rem ${({ glow }) => (glow ??'#00f4fd')};
`

const Btn = styled(Button)`
  background-color: #00f4fd;
  color: black;
  border-radius: 0.3rem;
`

const Icons = styled(Flex)`
  margin: 5rem auto 5rem auto;
  width: 50rem;
  flex-flow: row wrap;
  column-gap: 1rem;
  row-gap: 3rem;
  justify-content: center;
  align-items: baseline;
  position: relative;
`
const IconHolder = styled.div`
  min-width: 15rem;
`

const Icon: React.FC<SvgProps> = (props) => {
  const { Img, width } = props
  return <SvgIcon width={width} Img={Img} />
}

const MggToken = () => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <Page>
        <BgContainer bgImage={bgImage} bgColor='#140937' size='100% 94%' style={{height: '100vh'}}>
          <div style={{position: 'relative'}}>
            <HeadingGlow size='xxl' color={theme.colors.primary} glow={theme.colors.primary}>$MGG Token</HeadingGlow>
            <img src={`${MGGLogo}`} style={{width: '17rem', margin: '1rem 0'}}></img>
            <div style={{width: '50rem', margin: '0 auto'}}>
              <Heading size='lg' style={{margin: '1rem 0', textAlign: 'justify', textAlignLast: 'center', lineHeight: '2rem'}}>
                The $MGG token holds many utilities that generally fuel the overall MGG ecosystem.
                It is an ERC20 and BEP20 utility token designed to synergistically foster growth in
                the crypto space while distributing fair power and rewards among $MGG token holders.
              </Heading>
            </div>
          </div>
        </BgContainer>

        <BgContainer bgImage={GrowthBG} bgColor='#140937' position='center bottom' style={{padding: '0 5rem 5rem 5rem'}}>
          <div style={{position: 'relative'}}>
            <Card>
              <Flex style={{flexFlow: 'row', justifyContent: 'space-evenly'}}>
                <div style={{flex: 1}}>
                  <Heading size='xl' color={theme.colors.primary}>$MGG</Heading>
                  <Text>Ticker</Text>
                </div>
                <div style={{flex: 1}}>
                  <Heading size='xl' color={theme.colors.primary}>1 BILLION</Heading>
                  <Text>Total Supply</Text>
                </div>
                <div style={{flex: 1}}>
                  <Heading size='xl' color={theme.colors.primary}>$5,794,250</Heading>
                  <Text>Initial Market Cap</Text>
                </div>
              </Flex>
            </Card>
            <div style={{margin: '5rem 0 10rem 0'}}>
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
              <Btn>Go To Tokenomics Page</Btn>
            </div>
            <div>
              <Heading size='xl' color={theme.colors.primary}>MGG Contract Address</Heading>
              <Flex style={{flexDirection: 'column', rowGap: '2.5rem', margin: '2rem 0 0 0'}}>
                <div>
                  <a target="_blank" href='https://etherscan.io/address/0x7237c0b30b1355f1b76355582f182f6f04b08740'>
                    <img src={`${EthLogo}`} style={{width: '12rem', margin: '1rem 0'}}></img>
                  </a>
                  <a target="_blank" href='https://etherscan.io/address/0x7237c0b30b1355f1b76355582f182f6f04b08740'>
                    <Text>https://etherscan.io/address/0x7237c0b30b1355f1b76355582f182f6f04b08740</Text>
                  </a>
                  <a target="_blank" href='https://etherscan.io/address/0x7237c0b30b1355f1b76355582f182f6f04b08740'>
                    <Text color='#00f4fd'>Ethereum (ERC-20)</Text>
                  </a>
                </div>
                <div>
                  <a target="_blank" href='https://bscscan.com/address/0x6125adcab2f171bc70cfe2caecfec5509273a86a'>
                    <img src={`${BscLogo}`} style={{width: '12rem', margin: '1rem 0'}}></img>
                  </a>
                  <a target="_blank" href='https://bscscan.com/address/0x6125adcab2f171bc70cfe2caecfec5509273a86a'>
                    <Text>https://bscscan.com/address/0x6125adcab2f171bc70cfe2caecfec5509273a86a</Text>
                  </a>
                  <a target="_blank" href='https://bscscan.com/address/0x6125adcab2f171bc70cfe2caecfec5509273a86a'>
                    <Text color='#00f4fd'>Binance Smart Chain (BEP-20)</Text>
                  </a>
                </div>
                <div>
                  <a target="_blank" href='https://ftmscan.com/address/0xfda8355e8ce22ac44f2d175f4acfec8fac7472d7'>
                    <img src={`${FantomLogo}`} style={{width: '12rem', margin: '1rem 0'}}></img>
                  </a>
                  <a target="_blank" href='https://ftmscan.com/address/0xfda8355e8ce22ac44f2d175f4acfec8fac7472d7'>
                    <Text>https://ftmscan.com/address/0xfda8355e8ce22ac44f2d175f4acfec8fac7472d7</Text>
                  </a>
                  <a target="_blank" href='https://ftmscan.com/address/0xfda8355e8ce22ac44f2d175f4acfec8fac7472d7'>
                    <Text color='#00f4fd'>Fantom</Text>
                  </a>
                </div>
              </Flex>
            </div>
          </div>
        </BgContainer>
      </Page>
    </>
  )
}

export default MggToken