import React, { SVGAttributes, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import PNG from 'assets/images/Yield.png'
import { SvgProps } from '../../../../components/SvgIcon/types'
import SvgIcon from '../../../../components/SvgIcon/SvgIcon'

const Icon: React.FC<SvgProps> = (props) => {
  return <SvgIcon width={120} Img={PNG} />
}

export default Icon