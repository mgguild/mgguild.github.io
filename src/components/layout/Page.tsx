import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import { Helmet } from 'react-helmet'
import {DEFAULT_META, getCustomMeta } from '../../config/constants/Seo'
import Container from './Container'

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
const Seo = ({ title, description }: {title?: string; description?: string}) => {
    return (
      <Helmet>
        <title>{title} | MetaGaming Guild (MGG)</title>
        <meta name='description' content={description} />
      </Helmet>
    )
}

const Page: React.FC<HTMLAttributes<HTMLDivElement>> = ({children, ...props}) => {
  const { pathname } = useLocation()
  const metaData =  getCustomMeta(pathname) || {}
  const { title, description } = { ...DEFAULT_META, ...metaData }
    return (
        <>
          <Seo title={title} description={description} />
            <StyledPage {...props}>{children}</StyledPage>
        </>
    )
}

export default Page;