import React from 'react'
import { Heading, Text} from '@metagg/mgg-uikit'
import { nftUtilities } from 'config/constants/NFts';
import styled from 'styled-components'

const Section:React.FC = () => {
  return (
    <Container>
      <Text fontSize='3.5em' bold color='primary' style={{letterSpacing: '5px'}}>10 Utilities of MetaGaming NFTs</Text>
      <Ol>
        { nftUtilities.map((text) => (
          <Li key={text}>
            {text}
          </Li>
        ))}
      </Ol>
    </Container>
  )
}

export default Section;

const Ol = styled.ol`
  color: white;
  font-size: 1.5em;
  list-style-type: none;
  counter-reset: item;
  line-height: 1.5;
`
const Li = styled.li`
padding: 1rem 0 0 1rem;
&:before{
  content: counter(item)" ";
  counter-increment: item;
  font-weight: bold;
  color: #00B6FF;
  width: 1rem;
  margin-right: 1.5rem;
}
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 5rem 0px;
  padding: 3rem;
  background-color: rgba(12,1,44,1);
  background-image: url('/nft/groupdna.png');
  background-repeat: no-repeat;
  background-position: right;
  background-size: 50%;
  font-size: 12px;
  ${({theme}) => theme.mediaQueries.md} {
    font-size: 17px;
    padding: 6rem;
    min-height: 50vh;
    background-size: contain;
  }
`