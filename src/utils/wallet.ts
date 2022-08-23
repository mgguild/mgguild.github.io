// Set of helper functions to facilitate wallet setup

import { BASE_BSC_SCAN_URL, MAINNET_ETH_CHAIN_ID } from 'config'
import { nodes } from './getRpcUrl'

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async () => {
  const provider = (window as WindowChain).ethereum
  if (provider) {
    const chainId = parseInt(process.env.REACT_APP_CHAIN_ID ?? '', 10)
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Binance Smart Chain Testnet',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'bnb',
              decimals: 18,
            },
            rpcUrls: nodes,
            blockExplorerUrls: [`${BASE_BSC_SCAN_URL}/`],
          },
        ],
      })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  } else {
    console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
    return false
  }
}

export const switchNetwork = async (chainId) => {
  const provider = (window as WindowChain).ethereum
  if (provider) {
    let networkData
    switch (chainId) {
      case 97:
      case '97':
        networkData = [
          {
            chainId: '0x61',
            chainName: 'BSCTESTNET',
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
            nativeCurrency: {
              name: 'BINANCE COIN',
              symbol: 'BNB',
              decimals: 18,
            },
            blockExplorerUrls: ['https://testnet.bscscan.com/'],
          },
        ]
        break
      case 56:
      case '56':
        networkData = [
          {
            chainId: '0x38',
            chainName: 'BSCMAINET',
            rpcUrls: ['https://bsc-dataseed1.binance.org'],
            nativeCurrency: {
              name: 'BINANCE COIN',
              symbol: 'BNB',
              decimals: 18,
            },
            blockExplorerUrls: ['https://testnet.bscscan.com/'],
          },
        ]
        break
      default:
        break
    }
    try {
      if (chainId === MAINNET_ETH_CHAIN_ID) {
        provider.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x1' }] })
        return true
      }
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: networkData,
      })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  } else {
    console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
    return false
  }
}

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @param tokenImage
 * @returns {boolean} true if the token has been added, false otherwise
 */
// export const registerToken = async (
//   tokenAddress: string,
//   tokenSymbol: string,
//   tokenDecimals: number,
//   tokenImage: string,
// ) => {
//   const tokenAdded = await (window as WindowChain).ethereum.request({
//     method: 'wallet_watchAsset',
//     params: {
//       type: 'ERC20',
//       options: {
//         address: tokenAddress,
//         symbol: tokenSymbol,
//         decimals: tokenDecimals,
//         image: tokenImage,
//       },
//     },
//   })

//   return tokenAdded
// }