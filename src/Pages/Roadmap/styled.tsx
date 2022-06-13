import styled from 'styled-components'
import { Flex, Heading } from '@metagg/mgg-uikit'
import BGimage from '../../assets/background/BG2.png'

export const Card = styled.div`
  background-color: #0c012c;
  border: #00f4fd 0.15rem solid;
  border-radius: 0.5rem;
  padding: 2rem;
  -moz-box-shadow: inset 0 0 2rem #000000;
  -webkit-box-shadow: inset 0 0 2rem #000000;
  box-shadow: inset 0 0 2rem #000000, 0 0 0.5rem #00f4fd;
  z-index: 3;
`

export const CardContainer = styled.div`
  flex: 1;
  max-width: 26rem;
  min-width: 16rem;
  position: relative;
`

export const RdmapList = styled.ul`
  text-align: left;
  color: white;
  list-style-type: none;
  line-height: 1.5;
  font-weight: 400;
`

export const CheckList = styled.li`
  padding: 1rem 0 0 1rem;
  &:before{
    content: "✔";
    color: #06ff65;
    font-weight: bold;
    display: inline-block;
    width: 1rem;
    margin-left: -1rem;
  }
`

export const List = styled.li`
  padding: 1rem 0 0 1rem;
  &:before{
    content: "●";
    color: #fdda00;
    font-weight: bold;
    display: inline-block;
    width: 1rem;
    margin-left: -1rem;
  }
`

export const BgPage = styled.div`
  padding: 5rem;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-image: url(${BGimage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`

export const RdmapCards = styled(Flex)`
  margin: 2rem 0 0 0;
  flex-flow: row wrap;
  column-gap: 1rem;
  row-gap: 3rem;
  justify-content: center;
  align-items: baseline;
  position: relative;

  @media (max-width: 1280px) {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
`

export const HeadingGlow = styled(Heading)<{ glow?: string }>`
  text-shadow: 0 0 0.5rem ${({ glow }) => (glow ??'#00f4fd')};
`

export const Line = styled.div`
  width: 10%;
  background-color: rgb(253,218,0);
  z-index: 0;
  position: absolute;
  top: 5rem;
  left: 100%;
  border: solid #fdda00;
  box-shadow: 0 0 1rem #fdda00;

  @media (max-width: 1280px) {
    width: 0.1rem;
    left: 50%;
    top: 100%;
    height: 15%;
  }
`