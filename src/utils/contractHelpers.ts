import Web3 from 'web3'
import {AbiItem} from 'web3-utils'
import {getWeb3NoAccount} from 'utils/web3'

// Addresses
// ABI
import bep20Abi from 'config/abi/erc20.json'
import erc721Abi from 'config/abi/erc721.json'
import mggExtAbi from 'config/abi/mggExt.json'
import {getPFPNftAddress} from "./addressHelpers";
import {MAINNET_ETH_CHAIN_ID} from "../config";
import mggNftAbi from "../config/abi/mggNft.json";

export const getContract = (abi: any, address: string, chainId: string = MAINNET_ETH_CHAIN_ID, web3?: Web3) => {
    const _web3 = web3 ?? getWeb3NoAccount(chainId?.toString())
    // const gasPrice = account ? getSettings(account).gasPrice : getDefaultGasPrice()

    return new _web3.eth.Contract(abi as unknown as AbiItem, address)
}

export const getBep20Contract = (address: string, chainId = MAINNET_ETH_CHAIN_ID, web3?: Web3) => {
    return getContract(bep20Abi, address, chainId, web3)
}

export const getErc721Contract = (address: string, chainId = MAINNET_ETH_CHAIN_ID, web3?: Web3) => {
    return getContract(erc721Abi, address, chainId, web3)
}

export const getPFPNftContract = (chainId: string = MAINNET_ETH_CHAIN_ID, web3?: Web3) => {
    return getContract(mggExtAbi, getPFPNftAddress(chainId), chainId, web3)
}

export const getMGGNftContract = (nftAddress, chainId: string = MAINNET_ETH_CHAIN_ID, web3?: Web3) => {
    return getContract(mggNftAbi, nftAddress, chainId, web3)
}

