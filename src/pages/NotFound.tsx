import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Button, Heading, Text } from '@metagg/mgg-uikit'
import Page from 'components/layout/Page'


const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = () => {
    const history = useNavigate()
  return (
    <Page>
      <StyledNotFound>
        <img src="/static/logo.png" alt="LogoIcon" width="64px" style={{ marginBottom: '8px' }} />
        <Heading size="xxl">404</Heading>
        <Text mb="16px">Oops, page not found.</Text>
        <Button onClick={() => history('/')} size="sm">
          Back Home
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound