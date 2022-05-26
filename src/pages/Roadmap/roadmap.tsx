import React, { useState, useContext, useCallback } from 'react'
import { Text, Flex, Heading } from '@metagg/mgg-uikit'
import styled, { ThemeContext } from 'styled-components'
import Page from 'components/layout/Page'
import { NavOption } from '../../style/Global'
import roadmaps from '../../config/constants/roadmaps'
import {
  BgPage,
  HeadingGlow,
  RdmapCards,
  Line,
  Card,
  CardContainer,
  RdmapList,
  List,
  CheckList
} from './styled'


const Roadmap = () => {
  const theme = useContext(ThemeContext)
  const [active, setActive] = useState(Object.keys(roadmaps).length)
  const [getYear, setYear] = useState(roadmaps[Object.keys(roadmaps).pop()])

  return (
    <>
      <Page>
        <BgPage>
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
                        {getYear[quarter].map((list) => (list.check ? <CheckList>{list.txt}</CheckList> : <List>{list.txt}</List>))}
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
                              {roadmaps[year][quarter].map((list) => (list.check ? <CheckList>{list.txt}</CheckList> : <List>{list.txt}</List>))}
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
        </BgPage>
      </Page>
    </>
  )
}

export default Roadmap
