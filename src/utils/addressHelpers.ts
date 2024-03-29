import {MAINNET_CHAIN_ID, MAINNET_ETH_CHAIN_ID} from 'config'
import {Address} from 'config/constants/types'

export const getAddress = (address: Address, chainId = MAINNET_ETH_CHAIN_ID): string => {
    return address[chainId]
}

export const getPFPNftAddress = (chainId = MAINNET_ETH_CHAIN_ID) => {
    return getAddress({
        1: '0xE716f661051C026bc9fE40bca5F8443aCe5a7b13',
        4: '0xaA71113164F2c1E2f1c7Eb29Fa828501B9D1ca05'
    }, chainId)
}
