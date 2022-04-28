import React from 'react'
import { Text, Flex, Heading } from '@metagg/mgg-uikit'
import styled from 'styled-components'

const Card = styled.div`
  flex: 1;
  max-width: 26rem;
  min-width: 16rem;
  background-color: #0c012c;
  border: #00f4fd 0.15rem solid;
  border-radius: 0.5rem;
  padding: 2rem;
  -moz-box-shadow: inset 0 0 2rem #000000;
  -webkit-box-shadow: inset 0 0 2rem #000000;
  box-shadow: inset 0 0 2rem #000000, 0 0 0.5rem #00f4fd;
  
`

const RdmapList = styled.ul`
  text-align: left;
  color: white;
  list-style-type: none;
  line-height: 1.5;
  font-weight: 400;

  li{
    padding: 1rem 0 0 1rem;
    &:before{
      content: "●";
      color: #fdda00;
      font-weight: bold;
      display: inline-block;
      width: 1rem;
      margin-left: -1rem;
    }
  }
`

const Page = styled.div`
  padding: 5rem;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-image: url("/BG2.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto;
  }
`

const RdmapCards = styled(Flex)`
  margin: 2rem 0 0 0;
  flex-flow: row wrap;
  column-gap: 1rem;
  row-gap: 3rem;
  justify-content: space-between;
  align-items: baseline;
  position: relative;
  z-index: 4;

  @media (max-width: 1280px) {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
`

const HeadingGlow = styled(Heading)<{ glow?: string }>`
  text-shadow: 0 0 0.5rem ${({ glow }) => (glow ??'#00f4fd')};
`

const Line = styled.div`
  width: 100%;
  background-color: rgb(253, 218, 0);
  z-index: 3;
  position: absolute;
  top: 10rem;
  border: solid #fdda00;
  box-shadow: 0 0 1rem #fdda00;

  @media (max-width: 1280px) {
    width: 0.1rem;
    left: 50%;
    height: 80%;
  }
`


const Roadmap = () => {
  return (
    <>
      <Page>
        <div style={{position: 'relative', zIndex: 2}}>
          <HeadingGlow size='xxl' color='#fdda00' glow="#fdda00">Roadmap</HeadingGlow>
          <Line />

          <RdmapCards>
            <Card>
              <HeadingGlow size='xl' color='#00f4fd'>Q1</HeadingGlow>
              <RdmapList>
                <li>TGE launch and Distribution of MGG Tokens</li>
                <li>LP Farm and Single Asset Staking</li>
                <li>IGO and INO Launchpad</li>
                <li>MGG Gaming Scholarship Program (1,000 to 1,500 scholars)</li>
                <li>Partnerships and Official Listing at Exchanges</li>
                <li>1st buyback and burn program</li>
              </RdmapList>
            </Card>

            <Card>
              <HeadingGlow size='xl' color='#00f4fd'>Q2</HeadingGlow>
              <RdmapList>
                <li>GameFi Vault Official Launch</li>
                <li>MGG PFP NFTs Launch</li>
                <li>MGG NFT Game Production</li>
                <li>PVE Mode and Combat Mechanics</li>
                <li>Implement Levels 1 to 4</li>
                <li>Onboarding of more scholars ( 1,500 to 5,000 )</li>
                <li>Updated MGG Website: UI/UX Refresh</li>
                <li>Exchange Listing and Partnerships</li>
                <li>2nd buyback and burn program</li>
              </RdmapList>
            </Card>

            <Card>
              <HeadingGlow size='xl' color='#00f4fd'>Q3</HeadingGlow>
              <RdmapList>          
                <li>Earning Dashboard Launch</li>
                <li>NFT Game Blockchain Integration</li>
                <li>Implement Levels 5 to 9</li>
                <li>Exchange Listing and Partnerships </li>
                <li>ChainPort Bridge Integration</li>
                <li>Continue onboarding of scholars ( 5,000 to 7,500 )</li>
                <li>Team Expansion</li>
                <li>3rd buyback and burn program</li>
              </RdmapList>
            </Card>

            <Card>
              <HeadingGlow size='xl' color='#00f4fd'>Q4</HeadingGlow>
              <RdmapList>          
                <li>NFT Game: Alpha version release</li>
                <li>Launch of NFT Game Marketplace</li>
                <li>Exchange Listing and Partnerships</li>
                <li>Team Expansion</li>
                <li>Continue onboarding of scholars ( 7,500 to 10,000 )</li>
                <li>4tth buyback and burn program</li>
              </RdmapList>
            </Card>
          </RdmapCards>
        </div>
      </Page>
    </>
  )
}

export default Roadmap
