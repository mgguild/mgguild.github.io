import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Flex, Heading, Text } from '@metagg/mgg-uikit';
import styled, { ThemeContext } from 'styled-components';
import { BgPage, Btn, Card, HeadingGlow, InformativeButton } from './styled';
import useWeb3 from "../../hooks/useWeb3";
import { getBalanceAmount, getBalanceNumber, toBigNumber, formatNumber, getFullDisplayBalance } from "../../utils/formatBalance";
import useFetchCoinsData from 'hooks/useFetchCoinsData';
import LogoRonin from '../../assets/images/Logo_Ronin.png';
import CarvIcon from '../../assets/images/Logo_Carv.png';
import NearIcon from '../../assets/images/near.png';
import StakingImg from '../../assets/images/Staking(2).png';
import RioImg from '../../assets/images/rio_icon.png';
import NamadaImg from '../../assets/images/Namadillo.png';
import Page from 'components/layout/Page';
import { RIOValidatorDelegation, RONValidator } from 'config/constants/types';

const TableDesc = styled.div`
  text-align: center;
  font-size: 1.2rem;

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const TableDesc2 = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: white;

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const DescText = styled.div`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: white;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

const InfoSection = styled(Flex)`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: white;
  text-align: justify;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    font-size: 0.9rem;
    text-align: left; /* Align text left for mobile */
  }
`;


const TableRowContent = styled(Flex)`
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem; /* Reduce gap for mobile */
  }
`;

const StakingCard = styled(Card)`
  padding: 2rem;
  text-align: center;
  border: 1px solid #1E90FF;
  background-color: #0c0f2c;
  width: 100%;
  max-width: 365px;
  margin: 1rem;
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
  
  &:hover {
    border-color: #DAF7A6; /* Change to highlight color on hover */
    box-shadow: 0 0 8px 2px #DAF7A6; /* Optional shadow effect for highlight */
  }

  @media screen and (max-width: 600px) {
    padding: 1.5rem; /* Adjust padding */
    margin: 0.5rem; /* Adjust margin */
    width: 100%; /* Ensure it takes full width */
  }
`;

const AnimatedText = styled(DescText)`
  display: inline-block;
  animation: slide 15s linear infinite; // Customize timing as needed

  @keyframes slide {
    from {
      transform: translateX(120%); // Start from right side outside the view
    }
    to {
      transform: translateX(-120%); // End on the left side outside the view
    }
  }
`;

const DescTextContainer = styled.div`
  padding-left: 12rem;
  padding-right: 0rem;
  overflow: hidden; 
  white-space: nowrap; 
  width: 115%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Align text within columns */
  justify-content: flex-end;
  width: 300px; /* Set consistent width */
  color: #FFD700;
 
  @media screen and (max-width: 600px) {
    width: 80px; /* Adjust for smaller screens */
    align-items: center; /* Center for mobile */
  }
`;

const TableRowAligned = styled(Flex)`
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #1E90FF;
  border-radius: 8px;
  background-color: #0c0f2c;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
  &:hover {
    border-color: #DAF7A6; 
    box-shadow: 0 0 8px 2px #DAF7A6; /* Optional shadow effect for highlight */
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const ResponsiveFlex = styled(Flex)`
  width: 100%;
  justify-content: flex-end;

  // Mobile responsiveness
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;
    column {
      margin-bottom: 16px;
    }
  }
`;

const StakingTable = ({ logo, name, price, totalStake, apr }: any) => (
  <TableRowAligned>
    <TableRowContent>
      <img src={logo} alt={name} style={{ width: '50px', height: '50px' }} />
      <Heading size="xl" color="white">{name}</Heading>
    </TableRowContent>
    <ResponsiveFlex>
      <Column>
        <TableDesc>Price:</TableDesc>
        <TableDesc2>$ {price}</TableDesc2>
      </Column>
      <Column>
        <TableDesc>Total Stake:</TableDesc>
        <TableDesc2>{totalStake}</TableDesc2>
      </Column>
      <Column>
        <TableDesc>APR:</TableDesc>
        <TableDesc2>{apr}</TableDesc2>
      </Column>
    </ResponsiveFlex>
  </TableRowAligned>
);


const Staking: React.FC = () => {
  // const theme = useContext(ThemeContext);
  // const web3 = useWeb3();
  const {RONData, RIOData} = useFetchCoinsData();

  const [RONprice, setRONPrice] = useState<any>("TBA");
  const [RONTotalStaked, setRONTotalStaked] = useState("TBA");
  const [RONApr, setRONApr] = useState("TBA");
  const [RONAprLive, setRONAprLive] = useState<string>();

  const [RIOprice, setRIOPrice] = useState<any>("TBA");
  const [RIOTotalStaked, setRIOTotalStaked] = useState<string>("TBA");
  const [RIOApr, setRIOApr] = useState("TBA");

  useEffect(() => {
    if (RONData) {
      console.log('Fetched roninData:', RONData);
      setRONPrice(RONData.market.quote.USD.price ?? "TBA");
      setRONTotalStaked(RONData.totalStaked ?? "TBA");
      setRONApr(RONData.apr ?? "TBA");
      setRONAprLive(RONData.aprLive ?? "TBA");
    }

    if (RIOData) {
      console.log('Fetched RIO Data:', RIOData);
      setRIOPrice(RIOData.market.quote.USD.price ?? "TBA");
      setRIOTotalStaked((RIOData.validator as RIOValidatorDelegation).delegation_responses.length > 0 ?
                        (RIOData.validator as RIOValidatorDelegation).delegation_responses[0].balance.amount : "TBA");
      setRIOApr(RIOData.apr ?? "TBA");
    }
  }, [RONData, RIOData]);

  return (
    <Page>
    <BgPage padding="0">
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ margin: '0rem 0', padding: window.innerWidth <= 768 ? '0rem' : '8rem', paddingTop: window.innerWidth <= 768 ? '5rem' : '8rem', }}>
          <div style={{ display: 'inline-flex', gap: window.innerWidth <= 768 ? '3rem' : '17rem', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'left', alignContent: 'center' }}>
              <HeadingGlow size="xxl" color="#fdda00" glow="#fdda00" marginBottom= '1rem'>
                Earn Staking Rewards
              </HeadingGlow>
              <br />
              <DescText>Stake your RON, CARV, and earn rewards.</DescText>
            </div>
            <div style={{ margin: '10px' }}>
              <img src={StakingImg} alt="Guild Rewards" width={300} />
            </div>
          </div>
          <div style={{ display: 'inline-grid',  justifyContent: 'space-around', flexWrap: 'wrap', paddingRight: window.innerWidth <= 768 ? '0rem' : '10rem', paddingTop: window.innerWidth <= 768 ? '4rem' : '3rem', paddingBottom: window.innerWidth <= 768 ? '2rem' : '3rem'}}>
            <DescTextContainer>
              <AnimatedText style={{ color: 'yellow' }}>
                Stake your RONIN Tokens today and join the MGG Airdrop with a reward pool valued at $50,000.
              </AnimatedText>
            </DescTextContainer>
            </div>

            <Flex flexDirection="column" alignItems="center" style={{ margin: '4rem 0 3rem 0rem', gap: '3rem' }}>
            <StakingTable
              logo={LogoRonin}
              name="RON"
              price={parseFloat(RONprice).toFixed(2)}
              totalStake={`${RONTotalStaked} RON`}
              apr={`${RONAprLive}%/${RONApr}%`}
            />
            <StakingTable
              logo={RioImg}
              name="RIO"
              price={parseFloat(RIOprice).toFixed(4)}
              totalStake={`${getFullDisplayBalance(toBigNumber(RIOTotalStaked), 18, 2)} RIO`}
              apr={RIOApr !== "TBA" ? `${RIOApr}%` : "-"}
            />

          </Flex>


          <Flex justifyContent="center" flexWrap="wrap" style={{ gap: '1rem' }}>
            <StakingCard style={{ minHeight: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={LogoRonin} alt="RONIN" style={{ width: '95px', height: '95px', marginBottom: '2rem' }} />
              <Heading size="l" color="cyan"marginTop={"1rem"}>RONIN</Heading>
              <InfoSection color="white" style={{ textAlign: 'justify' }}>
                Ronin Token is the native cryptocurrency of the Ronin blockchain, designed specifically for gaming and digital asset ownership.
              </InfoSection>
              <a href="https://app.roninchain.com/validator/0xea94e2f3f1b24214f9d9bfb5608084476f34d48a" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginTop: 'auto' }}>
                <InformativeButton style={{ marginTop: '2rem' }}>Stake</InformativeButton>
              </a>
            </StakingCard>
            <StakingCard style={{ minHeight: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={CarvIcon} alt="CARV" style={{ width: '95px', height: '95px', marginBottom: '2rem' }} />
              <Heading size="l" color="cyan" marginTop={"1rem"}>CARV</Heading>
              <InfoSection color="white" style={{ textAlign: 'justify' }}>
                Carv Token is a utility cryptocurrency designed to enhance the Carv ecosystem, which focuses on decentralized social networking and user-generated content.
              </InfoSection>
              <a href="https://explorer.carv.io/verifiers" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginTop: 'auto' }}>
                <InformativeButton style={{ marginTop: '2rem' }}>Stake</InformativeButton>
              </a>
            </StakingCard>
            <StakingCard style={{ minHeight: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={RioImg} alt="CARV" style={{ width: '95px', height: '95px', marginBottom: '2rem' }} />
              <Heading size="l" color="cyan" marginTop={"1rem"}>RIO</Heading>
              <InfoSection color="white" style={{ textAlign: 'justify' }}>
                The Realio Network (RIO) is a cryptocurrency and utility token that serves as the native currency for the Realio Network platform. This platform is a comprehensive Software as a Service (SaaS) designed to tokenize real-world assets (RWAs) on the blockchain.
              </InfoSection>
              <a href="https://app.realio.network/validator/realiovaloper12szn0m0w5sjs0nkw0s8ws8y5d0g69303uuuray" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginTop: 'auto' }}>
                <InformativeButton style={{ marginTop: '2rem' }}>Stake</InformativeButton>
              </a>
            </StakingCard>
          </Flex>
          <Flex justifyContent="center" flexWrap="wrap" style={{ gap: '1rem' }}>
          <StakingCard style={{ minHeight: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={NamadaImg} alt="CARV" style={{ width: '95px', height: '95px', marginBottom: '2rem' }} />
              <Heading size="l" color="cyan" marginTop={"1rem"}>NAMADILLO</Heading>
              <InfoSection color="white" style={{ textAlign: 'justify' }}>
                Namadillo is a comprehensive user interface that will expand your access to the Shielded Ecosystem. With features like staking, governance, transfers, shielding and more, Namadillo is your home base for interacting with Namada.
              </InfoSection>
              <a href="https://interface.namada.tududes.com/staking" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginTop: 'auto' }}>
                <InformativeButton style={{ marginTop: '2rem' }}>Stake</InformativeButton>
              </a>
            </StakingCard>
            {/* <StakingCard style={{ minHeight: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={NearIcon} alt="CARV" style={{ width: '95px', height: '95px', marginBottom: '2rem' }} />
              <Heading size="l" color="cyan" marginTop={"1rem"}>NEAR</Heading>
              <InfoSection color="white" style={{ textAlign: 'justify' }}>
              NEAR's native token is also called NEAR, and is used to pay for transaction fees and storage. NEAR tokens can also be staked by token holders who participate in achieving network consensus as transaction validators. NEAR Protocol is focused on creating a developer and user friendly platform.
              </InfoSection>
              <a href="https://app.mynearwallet.com/staking/metagamingguild.poolv1.near" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginTop: 'auto' }}>
                <InformativeButton style={{ marginTop: '2rem' }}>Stake</InformativeButton>
              </a>
            </StakingCard> */}
            </Flex> 
        </div>
      </div>
    </BgPage>
    </Page>
  );
};

export default Staking;
