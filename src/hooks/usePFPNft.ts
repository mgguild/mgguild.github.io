import {useCallback, useEffect, useState} from 'react'
import {useWeb3React} from '@web3-react/core'
import {Contract} from 'web3-eth-contract'
import {mint} from 'utils/callHelpers'
import {getPFPNftContract} from "../utils/contractHelpers";
import useWeb3 from "./useWeb3";

export const useMint = (amount) => {
    const {account, chainId} = useWeb3React()
    const web3 = useWeb3()

    const contract = getPFPNftContract(chainId?.toString(), web3)
    const handleMint = useCallback(async () => {
        try {
            const txHash = await mint(contract, account, amount);
            console.log(web3.utils.hexToNumber(txHash.events[0].raw.topics[3]))
            return txHash
        } catch (e) {
            console.error(e)
            return false
        }
    }, [account, contract])

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
    }, [account])

    return {
        buyEnabled,
        price,
        currentPhase
    }
}

// export const useGetPublicInfo = (address = undefined) => {
//     const [{
//         buyEnabled,
//         price,
//         currentPhase
//     }, setUserInfo] = useState({
//         buyEnabled: '',
//         price: '',
//         currentPhase: ''
//     })
//
//     const {account, chainId} = useWeb3React()
//     const userAddress = address ?? account
//
//     useEffect(() => {
//         const fetchUserInfo = async () => {
//             const contract = getPFPNftContract(chainId?.toString())
//
//             const rawResults = await contract.methods.userInfo(userAddress).call()
//             setUserInfo({
//                 buyEnabled: rawResults.buyEnabled,
//                 price: rawResults.price,
//                 currentPhase: rawResults.currentPhase,
//             })
//         }
//
//         if (account) {
//             fetchUserInfo()
//         }
//     }, [account])
//
//     return {
//         buyEnabled,
//         price,
//         currentPhase
//     }
// }

