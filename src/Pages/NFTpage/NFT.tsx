import React, {useCallback, useContext, useState} from 'react'
import {Flex, Heading, Text} from '@metagg/mgg-uikit'
import styled, {ThemeContext} from 'styled-components'
import Page from 'components/layout/Page'
import Utilities from './Utilities'
import nftbg from '../../assets/Nft/nftbg.png'
import NftsGif from '../../assets/Nft/NFT.gif'
import {BgPage, Btn, Card, HeadingGlow, InformativeButton} from './styled'
import {useGetPublicInfo, useGetUserInfo, useMint} from "../../hooks/usePFPNft";
import {useWeb3React} from "@web3-react/core";
import UnlockButton from "../../components/UnlockButton";
import useToast from "../../hooks/useToast";
import {getOpenSeaUrl} from "../../utils/nftHelpers";
import useWeb3 from "../../hooks/useWeb3";
import {getBalanceAmount, getBalanceNumber, toBigNumber} from "../../utils/formatBalance";


const BadgesContainer = styled(Flex)`
  flex-flow: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(${nftbg});
    background-repeat: no-repeat;
    // background-position: center;
    background-size: cover;
  }

  @media screen and (max-width: 1000px) {
    flex-flow: column;
  }
`

const BadgesDesc = styled.div`
  max-width: 35rem;
  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`

const DescText = styled.div`
  text-align: center;
  @media screen and (max-width: 1000px) {
    text-align: center;
  }
`

const InfoSection = styled(Flex)`
  flex-flow: column;

  ${({theme}) => theme.mediaQueries.md} {
    flex-flow: row;
  }
`

const NFTpage: React.FC = () => {
    const theme = useContext(ThemeContext)
    const {account, chainId} = useWeb3React()
    const web3 = useWeb3()
    const [requestedMint, setRequestMint] = useState(false)
    const {buyEnabled} = useGetUserInfo()
    const {toastSuccess} = useToast()

    const {
        totalSupply,
        maxSupply,
        nftAddress,
        currentPhase,
        price,
        startTime,
        endTime,
    } = useGetPublicInfo()

    const {onMint} = useMint(price)

    const {
        phase1Enabled,
        phase2Enabled,
        phase3Enabled
    } = {
        phase1Enabled: currentPhase === '1',
        phase2Enabled: currentPhase === '2',
        phase3Enabled: currentPhase === '3'
    }

    const handleMint = useCallback(async () => {
        try {
            setRequestMint(true)
            const txHash = await onMint()
            const tokenId = web3.utils.hexToNumber(txHash.events[0].raw.topics[3])
            const tokenAddress = txHash.events[0].address
            const openSeaUrl = getOpenSeaUrl(chainId?.toString(), tokenAddress, tokenId)
            setTimeout(() => {
                setRequestMint(false)
                toastSuccess(`NFT Minted!`, <a href={openSeaUrl} target="_blank"
                                               style={{color: theme.colors.MGG_accent2}}>To check your minted NFT,
                    please click here</a>)
            }, 4000)
        } catch (e) {
            setRequestMint(false)
            console.error(e)
        }
    }, [onMint])
    return (
        <>
            <Page>
                <BgPage padding='0'>
                    <div style={{position: 'relative', zIndex: 2}}>
                        <BadgesContainer className='pad-10rem'>
                            <BadgesDesc>
                                <DescText>
                                    <HeadingGlow size='xl' color='#fdda00' glow="#fdda00">MINT IS LIVE!</HeadingGlow>
                                    <br/>
                                    <br/>
                                    <Heading size='lg' color={theme.colors.MGG_accent2}>Limited edition MetaGaming Guild
                                        PFP NFTs</Heading>
                                    <br/>
                                    <br/>
                                    <Text>The opportunity to own the first PFP NFTs in MetaGaming Guild has
                                        arrived!</Text>
                                    <br/>
                                    <br/>
                                    <Text color='textSubtle'>MetaGaming NFTs are rare collectible PFP NFTs in the
                                        MetaGaming Guild ecosystem. A total of 5,000 individually designed NFTs will be
                                        up for grabs on August 2022.</Text>
                                </DescText>
                            </BadgesDesc>

                            <InfoSection alignItems='center' justifyContent='center' margin='1rem 0 0 0'>
                                <InformativeButton disabled={phase1Enabled}
                                                   background={phase1Enabled ? '#037b14' : '#012c07'}
                                                   borderColor='#054824'>Allowlist -
                                    0.07E</InformativeButton>
                                {/* <InformativeButton disabled={phase2Enabled}
                                                   background={phase2Enabled ? '#958e03' : '#2d2b02'}
                                                   borderColor='#515022'>Waitlist -
                                    0.09E</InformativeButton> */}
                                <InformativeButton disabled={phase3Enabled}
                                                   background={phase3Enabled ? '#9e0205' : '#2d0102'}
                                                   borderColor='#73102f'>General Public -
                                    0.09E</InformativeButton>
                            </InfoSection>

                            {/* <Btn disabled style={{margin: '3rem 0 0 0'}}>BUY A LIMITED EDITION MGG NFT</Btn> */}
                            {account ?
                                <div style={{margin: '3rem 0 0 0'}}>
                                <Text>Account: <span style={{color: theme.colors.primary}}>{account}</span></Text>
                                <Btn marginTop='2rem' disabled={requestedMint || !buyEnabled} onClick={handleMint}>MINT</Btn>
                                </div>
                                : <UnlockButton style={{margin: '3rem 0 0 0'}}/>
                            }
                            {/* <Flex>
                <div>
                <img style={{display: 'block', width: 'auto', height: 'auto', maxHeight: '35rem'}} src={Nfts}/>
                </div>
              </Flex> */}
                        </BadgesContainer>
                        <Utilities/>
                        <div style={{margin: '5rem 0 0 0'}} className='pad-5rem'>
                            <HeadingGlow size='xl' color='#fdda00' glow="#fdda00">Flex and Show Off Your MGG
                                NFTs!</HeadingGlow>
                            <br/>
                            <br/>
                            <Heading size='l'>Each of these MetaGaming NFTs holds digital rarity, exclusive privileges
                                and special utilities that can maximize your benefits in the MetaGaming Guild
                                ecosystem.</Heading>
                            <br/>
                            <br/>
                            {/* <Text>What's in it for you: special ranks; exclusive offers & discounts; privileged access; bonus unlocks; redemption values and MORE!</Text> */}
                            <Flex style={{justifyContent: 'center'}}>
                                <div>
                                    <img style={{display: 'block', width: 'auto', height: 'auto', maxHeight: '20rem'}}
                                         src={NftsGif}/>
                                </div>
                            </Flex>

                            <Card>
                                <Flex style={{flexFlow: 'row wrap', columnGap: '2rem', justifyContent: 'space-evenly'}}>
                                    <div>
                                        <HeadingGlow size='xl' glow="#fdda00"
                                                     color={theme.colors.primary}>{ maxSupply }</HeadingGlow>
                                        <Text>Total Supply</Text>
                                    </div>
                                    <div style={{minWidth: '5rem'}}>
                                        <HeadingGlow size='xl' glow="#fdda00"
                                                     color={theme.colors.primary}>{maxSupply-totalSupply}</HeadingGlow>
                                        <Text>Available NFTs</Text>
                                    </div>
                                    <div>
                                        <HeadingGlow size='xl' glow="#fdda00"
                                                     color={theme.colors.primary}>{getBalanceNumber(toBigNumber(price))}</HeadingGlow>
                                        <Text>Price</Text>
                                    </div>
                                </Flex>
                            </Card>
                            <br/>
                            <Text>The number of PFP NFTs is fixed at 5,000 and purchase will only be available in
                                2022</Text>
                            <br/>
                            <Heading>Hurry! Don't miss your chance to own a LIMITED EDITION MetaGaming NFT!</Heading>

                            {/* <Btn disabled style={{margin: '3rem 0 5rem 0', padding: '2rem 5rem'}}>GO GET ONE! <Text style={{padding: '0 0 0.5rem 0'}}>&nbsp;👉</Text></Btn> */}
                            {/*<Btn style={{margin: '3rem 0 5rem 0', padding: '1rem 0rem'}}>August 22, 2022 1:00 PM*/}
                            {/*    UTC</Btn>*/}

                            <Card>
                                <div style={{padding: '1rem'}}>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 5fr',
                                        gap: '2rem',
                                        textAlign: 'left'
                                    }}>
                                        <Heading size='l' color={theme.colors.MGG_accent2}>Contact Address</Heading>
                                        <Text>{nftAddress?? 'n/a'}</Text>

                                        {/* <Heading size='l' color={theme.colors.MGG_accent2}>Token ID</Heading>
                                        <Text>To be added</Text> */}

                                        <Heading size='l' color={theme.colors.MGG_accent2}>Blockchain</Heading>
                                        <Text>Ethereum</Text>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </BgPage>
            </Page>
        </>
    )
}

export default NFTpage
