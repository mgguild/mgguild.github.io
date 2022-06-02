import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import {DEFAULT_META, getCustomMeta } from '../../config/constants/Seo'
import Container from './Container'
import SEO from './Head'

const StyledPage = styled(Container)`
  min-height: calc(100vh - 64px);
  padding-top: 0px;
  padding-bottom: 0px;
  ${({ theme }) => theme.mediaQueries.sm} {
    // padding-top: 24px;
    padding-bottom: 24px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`

const Page: React.FC<HTMLAttributes<HTMLDivElement>> = ({children, ...props}) => {
  const { pathname } = useLocation()
  const metaData =  getCustomMeta(pathname) || {}
  const { title, description } = { ...DEFAULT_META, ...metaData }
    return (
        <>
          <SEO title={title} description={description} />
            <StyledPage {...props}>{children}</StyledPage>
        </>
    )
}

export default Page;