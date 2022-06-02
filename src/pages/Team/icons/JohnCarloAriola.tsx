import React, { SVGAttributes, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import PNG from 'assets/teams/5 T&D Carlo.png'
import { SvgProps } from '../../../components/svgIcon/types'
import SvgIcon from '../../../components/svgIcon/SvgIcon'

const Icon: React.FC<SvgProps> = (props) => {
  return <SvgIcon Img={PNG} width={props.width} />
}

export default Icon