import React, { lazy } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation} from "react-router-dom";
import { ResetCSS } from "@metagg/mgg-uikit";
import GlobalStyle from "./style/Global";
import Menu from "components/Menu";
import SuspenseWithChunkError from "components/SuspenseWithChunkError";
import PageLoader from "components/PageLoader";
import Footer from "components/Footer";

const Website: React.FC = () => {
  const loc = document.location;
  const Homepage = lazy(() => import("./Pages/Homepage"));
  const RevenueModel = lazy(() => import('./Pages/Revenue-Model'));
  const Team = lazy(() => import('./Pages/Team'))
  const Roadmap = lazy(() => import("./Pages/Roadmap"));
  const MggToken = lazy(() => import("./Pages/MggToken"));
  const Partners = lazy(() => import("./Pages/Partners"));
  const Whitepaper = lazy(() => import("./Pages/Whitepaper"));
  const NFT = lazy(() => import("./Pages/NFTpage"));
  // const NotFound = lazy(() => import("./Pages/"));

  
  return (
    <HashRouter>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
       <SuspenseWithChunkError fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/revenue-model' element={<RevenueModel /> } />
            <Route path="/team" element={<Team />} />
            {/* <Route path="/homepage" element={<Homepage />} /> */}
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/mgg-token" element={<MggToken />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/White-Paper" element={<Whitepaper />} />
            <Route path="/mgg-NFTs" element={<NFT />} />
            {/* <Route path="/" element={<Navigate replace to='/homepage' />} /> */}
            <Route path='*' element={<Navigate replace to='/'/>} />
          </Routes>
          <Footer />
        </SuspenseWithChunkError>
      </Menu>

    </HashRouter>
  );
};

export default Website;
