import random from 'lodash/random'
import { MAINNET_ETH_CHAIN_ID } from '../config'

// Array of available nodes to connect to
export const nodes = [process.env.REACT_APP_NODE_1, process.env.REACT_APP_NODE_2, process.env.REACT_APP_NODE_3]
export const ethnodes = [process.env.REACT_APP_ETH_NODE_1]
export const rinknodes = [process.env.REACT_APP_RINK_NODE_1]

const getNodeUrl = (chainId = MAINNET_ETH_CHAIN_ID) => {
  switch (chainId) {
    case '1':
      return ethnodes[0]
    case '4':
      return rinknodes[0]
    default:
      return rinknodes[0]
  }
}

export default getNodeUrl
