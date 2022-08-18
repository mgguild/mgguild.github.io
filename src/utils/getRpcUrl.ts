import random from 'lodash/random'
import { MAINNET_CHAIN_ID } from '../config'

// Array of available nodes to connect to
export const nodes = [process.env.REACT_APP_NODE_1, process.env.REACT_APP_NODE_2, process.env.REACT_APP_NODE_3]
export const ethnodes = [process.env.REACT_APP_ETH_NODE_1]
export const ropsnodes = [process.env.REACT_APP_ROPS_NODE_1]

const getNodeUrl = (chainId = MAINNET_CHAIN_ID) => {
  const randomIndex = random(0, nodes.length - 1)
  switch (chainId) {
    case '1':
      return ethnodes[0]
    case '3':
      return ropsnodes[0]
    default:
      return nodes[randomIndex]
  }
}

export default getNodeUrl