import React from "react";
import { NavOption } from "../../style/Global";
import { Text, Flex } from "@metagg/mgg-uikit";
import { Grid } from '@mui/material'
import Page from "../../components/layout/Page";
import { Teams } from "../../config/constants/team";
import { BgPage } from "./styled";
import Team from './Team'
import { ContentContainer, HeaderContainer, PageTitle } from "./styled";

const TeamsPage: React.FC = () => {
  const [active, setActive] = React.useState(0);
  const [teams, setTeams] = React.useState(Teams[Object.keys(Teams).pop()]);
  return (
    <Page>
      <BgPage>
        <div style={{position: 'relative', zIndex: 2}}>
      <HeaderContainer>
        <PageTitle> MGG Team and Advisors </PageTitle>
        <Text as="p">
          MGG is developed by tthe collective minds of people who believe that
          the future of gaming will be a play-to-earn model powered by
          Non-Fungible Tokens &#40; NFT &#44; and blockchain technology
        </Text>
      </HeaderContainer>
      <ContentContainer>
        <Flex
          alignItems="center"
          margin="2.5rem 0px 2rem 0px"
          padding="0 0 1rem 0"
          style={{
            justifyContent: "center",
            borderBottom: `0.5px solid #00f4fd`,
            width: "100%",
            flexFlow: "wrap row",
            rowGap: "1rem",
            columnGap: "1.5rem",
          }}
        >
          <NavOption
            key="all"
            onClick={() => {
              setActive(0);
            }}
            activeIndex={active === 0}
            style={{ borderRadius: "0.5rem", padding: "0 2rem" }}
          >
            All
          </NavOption>
          {Object.keys(Teams).map((cat, index) => (
            <NavOption
              key={cat}
              onClick={() => {
                setActive(index+1);
                setTeams(Teams[cat])
              }}
              activeIndex={active === index+1}
              style={{ borderRadius: "0.5rem", padding: "0 2rem" }}
            >
              {cat}
            </NavOption>
          ))}
        </Flex>
       {
         active !== 0 && (
           <>
            <Grid container rowSpacing={{md: 4}}  justifyContent="center" alignItems='center'>
            {
              teams.map((team) => (
                <>
                  <Grid key={team.name} item md={4}>
                    <Team {...team}/>
                  </Grid>
                </>
              ))
            }
            </Grid>
           </>
         )
       }
      </ContentContainer>
      </div>
      </BgPage>
    </Page>
  );
};
export default TeamsPage;
