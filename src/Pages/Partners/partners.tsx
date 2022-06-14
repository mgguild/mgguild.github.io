import React, { useState, useContext, useCallback } from 'react'
import { Text, Flex, Heading } from '@metagg/mgg-uikit'
import styled, { ThemeContext } from 'styled-components'
import Page from 'components/layout/Page'

import { NavOption } from '../../style/Global'
import partners from '../../config/constants/partners'
import {
  BgPage,
  HeadingGlow,
  Logos,
  Logo,
  Card,
  CardContainer,
  List,
  CheckList
} from './styled'


const Partners = () => {
  const theme = useContext(ThemeContext)
  const [active, setActive] = useState(0)
  const [getPartners, setPartners] = useState(partners.Partners)

  return (
    <>
      <Page>
        <BgPage>
          <div style={{position: 'relative', zIndex: 2}}>
            <HeadingGlow size='xxl' color='#fdda00' glow="#fdda00">Partners</HeadingGlow>
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
              <NavOption
                  key='all'
                  style={{borderRadius: '0.5rem', padding: '0 2rem'}}
                  onClick={() => {setActive(1); setPartners(partners.InvsBckrs)}}
                  activeIndex={active === 1}
                >
                Investors and Backers
              </NavOption>
              <NavOption
                  key='all'
                  style={{borderRadius: '0.5rem', padding: '0 2rem'}}
                  onClick={() => {setActive(2); setPartners(partners.Partners)}}
                  activeIndex={active === 2}
                >
                Partners
              </NavOption>
            </Flex>


            {active !== 0 ?
              <Logos>
                {Object.keys(getPartners).map((partner) => (
                  <CardContainer>
                    <Card>
                     <img src={getPartners[partner].logo} />
                    </Card>
                  </CardContainer>
                ))}
              </Logos>
              :
              <div>
                <div style={{margin: '0 0 2rem 0'}}>
                  <Heading size='xl'>Investors and Backers</Heading>
                   <Logos>
                      {Object.keys(partners.InvsBckrs).map((partner) => (
                          <CardContainer>
                            <Card>
                              <img src={partners.InvsBckrs[partner].logo} />
                            </Card>
                          </CardContainer>
                      ))}
                   </Logos>
                </div>
                <div style={{margin: '0 0 2rem 0'}}>
                  <Heading size='xl'>Partners</Heading>
                  <Logos>
                    {Object.keys(partners.Partners).map((partner) => (
                      <CardContainer>
                        <Card>
                          <img src={partners.Partners[partner].logo} />
                        </Card>
                      </CardContainer>
                    ))}
                  </Logos>
                </div>
              </div>
            }

          </div>
        </BgPage>
      </Page>
    </>
  )
}

export default Partners
