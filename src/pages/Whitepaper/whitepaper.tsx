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
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);



  return (
    <>
      <PageContainer>

        <BgContainer bgImage={bgImage} bgColor='#140937' size='cover' style={{alignItems: 'center', justifyContent: 'center'}}>
          <Section>
            <HeadingGlow size='xxl' color={theme.colors.primary} glow={theme.colors.primary}>White Paper</HeadingGlow>
            <div style={{position: 'relative', zIndex: 1, width: '100%', maxWidth: '50rem', height: '801px'}}>
              <iframe src={PDF} width="100%" height="801px" style={{position: 'relative', zIndex: 3}}/>
              <img src={PDFImg} style={{position: 'absolute', top: 0, left: 0, zIndex: 1}}/>

            </div>

            <a href={PDF}>
              <Btn>Download PDF</Btn>
            </a>
          </Section>
        </BgContainer>

      </PageContainer>
    </>
  )
}

export default MggToken