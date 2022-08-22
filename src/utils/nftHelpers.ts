export const getOpenSeaUrl = (chainId, nftAddress, tokenId) => {
    switch (chainId) {
        case '1':
            return `https://opensea.io/assets/ethereum/${nftAddress}/${tokenId}`
        case '4':
            return `https://testnets.opensea.io/assets/rinkeby/${nftAddress}/${tokenId}`
        default:
            return `https://opensea.io/assets/ethereum/${nftAddress}/${tokenId}`
    }
}

export const openInNewTab = (url) => {
    const win = window.open(url, '_blank')
    if (win) {
        win.focus();
    }
}
