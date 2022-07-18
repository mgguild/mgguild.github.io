import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Countdown, { calcTimeDelta } from 'react-countdown'
import { Text, Flex, Heading } from '@metagg/mgg-uikit'
import { LaunchDateEpoch } from "config/constants/NFts";

const TimerBox = styled(Flex)`
  display: grid;
  position: relative;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
  align-items: center;
  text-align: center;
  & > * {
    flex: 1;
    margin-right: 0px;
  }
`

const Timer : React.FC = () => {
    return(
      <>
        <Countdown
          date={LaunchDateEpoch}
          onStop={() => {return (<Text>Comming Soon!</Text>)}}
          renderer={({ days, hours, minutes, seconds, completed, api }) => {
            return(
              <Text>{days} : {hours} : {minutes} : {seconds}</Text>
            )
          }}
        />
      </>
    )
}

export default Timer