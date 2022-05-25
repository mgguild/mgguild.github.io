import React, { useState, useContext, useCallback } from 'react'
import { Text, Flex, Heading } from '@metagg/mgg-uikit'
import styled, { ThemeContext } from 'styled-components'
import { NavOption } from '../../style/Global'
import roadmaps from '../../config/constants/roadmaps'

const Card = styled.div`
  background-color: #0c012c;
  border: #00f4fd 0.15rem solid;
  border-radius: 0.5rem;
  padding: 2rem;
  -moz-box-shadow: inset 0 0 2rem #000000;
  -webkit-box-shadow: inset 0 0 2rem #000000;
  box-shadow: inset 0 0 2rem #000000, 0 0 0.5rem #00f4fd;
  z-index: 3;
`

const CardContainer = styled.div`
  flex: 1;
  max-width: 26rem;
  min-width: 16rem;
  position: relative;
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
    background-size: cover;
  }
`

const RdmapCards = styled(Flex)`
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

const HeadingGlow = styled(Heading)<{ glow?: string }>`
  text-shadow: 0 0 0.5rem ${({ glow }) => (glow ??'#00f4fd')};
`

const Line = styled.div`
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

const Roadmap = () => {
  const theme = useContext(ThemeContext)
  const [active, setActive] = useState(Object.keys(roadmaps).length)
  const [getYear, setYear] = useState(roadmaps[Object.keys(roadmaps).pop()])

  return (
    <>
      <Page>
        <div style={{position: 'relative', zIndex: 2}}>
          <HeadingGlow size='xxl' color='#fdda00' glow="#fdda00">Roadmap</HeadingGlow>
          <Flex
             alignItems="center"
             margin="2.5rem 0px 2rem 0px"
             padding="0 0 1rem 0"
             style={{
              justifyContent: 'center',
              borderBottom: `0.5px solid #00f4fd`,
              width: '100%',
              flexFlow: 'wrap row',
              rowGap: '1rem',
              columnGap: '1.5rem'
            }}
          >
            <NavOption
                key='all'
                style={{borderRadius: '0.5rem', padding: '0 2rem'}}
                onClick={() => {setActive(0)}}
                activeIndex={active === 0}
              >
               All
             </NavOption>
            {Object.keys(roadmaps).map((year, index) => (
              <NavOption
                key={year}
                style={{borderRadius: '0.5rem', padding: '0 2rem'}}
                onClick={() => {setActive(index + 1); setYear(roadmaps[year])}}
                activeIndex={active === index + 1}
              >
               {year}
             </NavOption>
            ))}
          </Flex>


          {active !== 0 ?
            <RdmapCards>
              {Object.keys(getYear).map((quarter) => (
                <CardContainer>
                  {quarter !== 'Q4' && <Line />}
                  <Card>
                    <HeadingGlow size='xl' color='#00f4fd'>{quarter}</HeadingGlow>
                    <RdmapList>
                      {getYear[quarter].map((list) => <li>{list}</li>)}
                    </RdmapList>
                  </Card>
                </CardContainer>
              ))}
            </RdmapCards>
            :
            <div>
              {Object.keys(roadmaps).map((year) => (
                <div style={{margin: '0 0 2rem 0'}}>
                  <Heading size='xl'>{year}</Heading>
                  <RdmapCards>
                    {Object.keys(roadmaps[year]).map((quarter) => (
                      <CardContainer>
                        {quarter !== 'Q4' && <Line />}
                        <Card>
                          <HeadingGlow size='xl' color='#00f4fd'>{quarter}</HeadingGlow>
                          <RdmapList>
                            {roadmaps[year][quarter].map((list) => <li>{list}</li>)}
                          </RdmapList>
                        </Card>
                      </CardContainer>
                    ))}
                  </RdmapCards>
                </div>
              ))}
            </div>
          }

        </div>
      </Page>
    </>
  )
}

export default Roadmap
