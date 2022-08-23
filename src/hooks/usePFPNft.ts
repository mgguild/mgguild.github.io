import {useCallback, useEffect, useState} from 'react'
import {useWeb3React} from '@web3-react/core'
import {mint} from 'utils/callHelpers'
import {getMGGNftContract, getPFPNftContract} from "../utils/contractHelpers";
import useWeb3 from "./useWeb3";
import useRefresh from "./useRefresh";

export const useMint = (amount) => {
    const {account, chainId} = useWeb3React()
    const web3 = useWeb3()
    const {fastRefresh} = useRefresh()
    const contract = getPFPNftContract(chainId?.toString(), web3)
    const handleMint = useCallback(async () => {
        try {
            const txHash = await mint(contract, account, amount);
            return txHash
        } catch (e) {
            console.error(e)
            return false
        }
    }, [account, contract, fastRefresh])

    return {onMint: handleMint}
}

export const useGetUserInfo = (address = undefined) => {
    const [{
        buyEnabled,
        price,
        currentPhase
    }, setUserInfo] = useState({
        buyEnabled: false,
        price: '',
        currentPhase: ''
    })

    const {fastRefresh} = useRefresh()
    const {account, chainId} = useWeb3React()
    const web3 = useWeb3()

    const userAddress = address ?? account

    useEffect(() => {
        const fetchUserInfo = async () => {
            const contract = getPFPNftContract(chainId?.toString(), web3)

            const rawResults = await contract.methods.userInfo(userAddress).call()
            setUserInfo({
                buyEnabled: rawResults.buyEnabled,
                price: rawResults.price,
                currentPhase: rawResults.currentPhase,
            })
        }

        if (account) {
            fetchUserInfo()
        }
    }, [account, fastRefresh])

    return {
        buyEnabled,
        price,
        currentPhase
    }
}
export const useGetPublicInfo = () => {
    const [{
        nftAddress,
        totalSupply,
        maxSupply,
        currentPhase,
        price,
        startTime,
        endTime
    }, setPFPInfo] = useState({
        nftAddress: '',
        totalSupply: 0,
        maxSupply: 0,
        currentPhase: '',
        price: '',
        startTime: '',
        endTime: ''
    })
    const {chainId, account} = useWeb3React()
    const web3 = useWeb3()
    const fetchPublicInfo = useCallback(async () => {
        const contract = getPFPNftContract(chainId?.toString(), account ? web3 : null)
        const {
            currentPhase,
            price,
            startTime,
            endTime
        } = await contract.methods.currentPhase().call()
        const nftAdd = await contract.methods.MGGPFPContract().call()
        const mggNftContract = getMGGNftContract(nftAdd, chainId?.toString(), web3)
        const mSupply = await mggNftContract.methods.maxSupply().call()
        const tSupply = await mggNftContract.methods.totalSupply().call()
        setPFPInfo({
            nftAddress: nftAdd,
            totalSupply: tSupply,
            maxSupply: mSupply,
            currentPhase,
            price,
            startTime,
            endTime
        })
    }, [])
    useEffect(() => {
        fetchPublicInfo().then(console.info);
    }, [fetchPublicInfo, account])

    return {
        totalSupply,
        maxSupply,
        nftAddress,
        currentPhase,
        price,
        startTime,
        endTime
    }
}


