import React, { useContext, useState } from 'react'
import { Text, Flex, Heading, Button } from '@metagg/mgg-uikit'
import styled, { ThemeContext } from 'styled-components'
import PageContainer from 'components/layout/Page'
import { BgContainer } from '../../style/Global'
import {
  Card,
  HeadingGlow,
  Btn,
  Icons,
  IconHolder,
  Section,
} from './styled'

import bgImage from 'assets/background/revTokenBG.png'
import PDFImg from './whitepaper/whitepaperImg.png'
import PDF from './whitepaper/MetaGaming-Guild-White-Paper-02082022.pdf'


const MggToken = () => {
  const theme = useContext(ThemeContext)

  const IframeOnLoad = (e: any) => {
    console.log(e)
  }

  return (
    <>
      <PageContainer>

        <BgContainer bgImage={bgImage} bgColor='#140937' size='cover' style={{alignItems: 'center', justifyContent: 'center'}}>
          <Section>
            <HeadingGlow size='xxl' color={theme.colors.primary} glow={theme.colors.primary}>White Paper</HeadingGlow>
            <div style={{position: 'relative', zIndex: 1, width: '100%', maxWidth: '50rem'}}>
              <iframe onLoad={IframeOnLoad} src={PDF} width="100%" style={{position: 'relative', zIndex: 3, height: '100vh', maxHeight: '800px'}}/>
              {/* <img src={PDFImg} style={{position: 'absolute', top: 0, left: 0, zIndex: 1}}/> */}

              <a target='_blank' href={PDF}>
                <Btn style={{margin: '1rem 0 0 0 '}}>Download PDF</Btn>
              </a>
            </div>
          </Section>
        </BgContainer>

      </PageContainer>
    </>
  )
}

export default MggToken