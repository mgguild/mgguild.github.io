import {getDecimalAmount} from "./formatBalance";

export const mint = async (tokenContract, account, amount) => {
    return tokenContract.methods
        .buyNFT()
        .send({from: account, value: amount})
        .on('transactionHash', (tx) => {
            return tx.transactionHash
        })
}

