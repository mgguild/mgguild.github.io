import React, { SVGAttributes, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import MetaGamersPNG from 'assets/images/MetaGamers.png'
import { SvgProps } from '../../../../components/svgIcon/types'
import SvgIcon from '../../../../components/svgIcon/SvgIcon'

const Icon: React.FC<SvgProps> = (props) => {
  return <SvgIcon width={120} Img={MetaGamersPNG} />
}

export default Icon