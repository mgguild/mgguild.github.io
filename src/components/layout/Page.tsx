import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
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

const Page: React.FC<HTMLAttributes<HTMLDivElement>> = ({children, ...props}) => {
    return (
        <>
            <StyledPage {...props}>{children}</StyledPage>
        </>
    )
}

export default Page;