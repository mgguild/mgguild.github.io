import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import { ConnectorNames } from '@pancakeswap/uikit'
import Web3 from 'web3'
import getNodeUrl from './getRpcUrl'
import { MAINNET_CHAIN_ID, MAINNET_ETH_CHAIN_ID, ROPSTEN_CHAIN_ID, TESTNET_CHAIN_ID } from '../config'

const POLLING_INTERVAL = 12000
const rpcUrl = getNodeUrl()
const chainId = parseInt(MAINNET_CHAIN_ID, 10)
const ethMainChainId = parseInt(MAINNET_ETH_CHAIN_ID, 10)
const ropsChainId = parseInt(ROPSTEN_CHAIN_ID, 10)
const bscTestnet = parseInt(TESTNET_CHAIN_ID, 10)
const injected = new InjectedConnector({ supportedChainIds: [chainId, ethMainChainId, bscTestnet] })

const walletconnect = new WalletConnectConnector({
  rpc: {
    [chainId]: rpcUrl,
    [ethMainChainId]: rpcUrl,
    [ropsChainId]: rpcUrl,
  },
  bridge: 'https://bridge.walletconnect.org/',
  qrcode: true,
  // pollingInterval: POLLING_INTERVAL,
})

const bscConnector = new BscConnector({ supportedChainIds: [chainId, ethMainChainId, ropsChainId] })

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.BSC]: bscConnector,
}

export const getLibrary = (provider): Web3 => {
  return provider
}