import React from 'react'
import { Text } from '@metagg/mgg-uikit'
import { SvgProps } from "../../components/svgIcon/types";
import { CardContainer } from './styled';
import * as IconModule from './icons'

interface Props {
  name: string;
  title: string;
}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };
const Team:React.FC<Props> = ({name, title}) => {
  const src = `${name.replace(/\s+/g, '')}Img`
  const Icon = Icons[src] ?? Icons['PlaceholderImg']
  const iconElement: React.ReactElement = <Icon mr="8px" width={300}/>;
  return (
    <CardContainer>
      {iconElement}
      <Text color="primary" fontSize="2em">{name}</Text>
      <Text fontSize='1em'>{title}</Text>
    </CardContainer>
  )
}

export default Team;