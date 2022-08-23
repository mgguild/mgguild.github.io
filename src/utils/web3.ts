import Web3 from 'web3'
import {HttpProviderOptions} from 'web3-core-helpers'
import getRpcUrl from 'utils/getRpcUrl'

export const getWeb3NoAccount = (chainId, web3?: Web3) => {
    const RPC_URL2 = getRpcUrl(chainId)
    const provider = new Web3.providers.HttpProvider(RPC_URL2, { timeout: 10000 } as HttpProviderOptions)

    return new Web3(provider)
}
