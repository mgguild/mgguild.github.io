import React, { useState, useContext, useCallback } from 'react'
import { Text, Flex, Heading, Button } from '@metagg/mgg-uikit'
import styled, { ThemeContext } from 'styled-components'
import Page from 'components/layout/Page'
import { NavOption } from '../../style/Global'
import roadmaps from '../../config/constants/roadmaps'
import {
  BgPage,
  HeadingGlow,
  Card,
  Btn,
} from './styled'


const NFTpage = () => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <Page>
        <BgPage>
          <div style={{position: 'relative', zIndex: 2}}>
            <div style={{display: 'grid', gridTemplateColumns: '3fr 5fr'}}>
              <div>
                <div style={{textAlign: 'left'}}>
                  <HeadingGlow size='xl' color='#fdda00' glow="#fdda00">Limited Edition MGG NFT Badge</HeadingGlow>
                  <br />
                  <br />
                  <Text>The opportunity to own the first NFTs in MetaGaming Guild has arrived!</Text>
                  <br />
                  <br />
                  <Text>MGG NFT is an exclusive user identification on MetaGaming Guild ecosystem. A total of 5,000 individually designed NFTs will be up for grabs to eligible MGG token holders beginning (date?) 2022.</Text>
                </div>

                <Btn style={{margin: '3rem 0 0 0'}}>BUY A LIMITED EDITION MGG NFT</Btn>
              </div>
              <div>
                <Text>IMG here</Text>
              </div>
            </div>
            <div style={{margin: '5rem 0 0 0'}}>
              <HeadingGlow size='xl' color='#fdda00' glow="#fdda00">Flex and Show Off Your MGG NFTs!</HeadingGlow>
              <br />
              <br />
              <Heading size='l'>Each of These MGG NFTs holds digital rarity, exclusive privileges and special utilities that can maximize your benefits in the MetaGaming Guild ecosystem.</Heading>
              <br />
              <br />
              <Text>What's in it for you: special ranks; exclusive offers & discounts; privileged access; bonus unlocks; redemption values and MORE!</Text>

              <Card>
                <Flex style={{flexFlow: 'row wrap', columnGap: '2rem', justifyContent: 'space-evenly'}}>
                  <div>
                    <HeadingGlow size='xl' glow="#fdda00" color={theme.colors.primary}>5,000</HeadingGlow>
                    <Text>Total NFT Supply</Text>
                  </div>
                  <div style={{minWidth: '5rem'}}>
                    <HeadingGlow size='xl' glow="#fdda00" color={theme.colors.primary}>TBA</HeadingGlow>
                    <Text>Available NFTs</Text>
                  </div>
                  <div>
                    <HeadingGlow size='xl' glow="#fdda00" color={theme.colors.primary}>TBA</HeadingGlow>
                    <Text>Price</Text>
                  </div>
                </Flex>
              </Card>
              <br />
              <Text>The number of NFTs is fixed at 5,000 and purchase will only be available in 2022</Text>
              <br />
              <Heading>Hurry! Don't miss your chance to own a LIMITED EDITION MGG NFT Badge!</Heading>

              <Btn style={{margin: '3rem 0 5rem 0', padding: '2rem 5rem'}}>GO GET ONE! <Text style={{padding: '0 0 0.5rem 0'}}>&nbsp;👉</Text></Btn>

              <Card>
                <div style={{padding: '1rem'}}>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 5fr', rowGap: '2rem', textAlign: 'left'}}>
                    <Heading size='l' color={theme.colors.MGG_accent2}>Contact Address</Heading>
                    <Text>To be added</Text>

                    <Heading size='l' color={theme.colors.MGG_accent2}>Token ID</Heading>
                    <Text>To be added</Text>

                    <Heading size='l' color={theme.colors.MGG_accent2}>Blockchain</Heading>
                    <Text>To be added</Text>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </BgPage>
      </Page>
    </>
  )
}

export default NFTpage
