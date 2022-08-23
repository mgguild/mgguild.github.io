import {useCallback, useEffect, useState} from 'react'
import {useWeb3React} from '@web3-react/core'
import {mint} from 'utils/callHelpers'
import {getPFPNftContract} from "../utils/contractHelpers";
import useWeb3 from "./useWeb3";
import useRefresh from "./useRefresh";
import {getPFPNftAddress} from "../utils/addressHelpers";

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
        currentPhase,
        price,
        startTime,
        endTime
    }, setPFPInfo] = useState({
        nftAddress: '',
        currentPhase: '',
        price: '',
        startTime: '',
        endTime: ''
    })
    const {chainId, account} = useWeb3React()
    const web3 = useWeb3()
    const fetchUserInfo = useCallback(async () => {
        const contract = getPFPNftContract(chainId?.toString(), account ? web3 : null)

        const {
            currentPhase,
            price,
            startTime,
            endTime
        } = await contract.methods.currentPhase().call()

        setPFPInfo({
            nftAddress: getPFPNftAddress(chainId?.toString()),
            currentPhase,
            price,
            startTime,
            endTime
        })
    }, [])
    useEffect(() => {
        fetchUserInfo().then(console.info);
    }, [fetchUserInfo, account])

    return {
        nftAddress,
        currentPhase,
        price,
        startTime,
        endTime
    }
}


