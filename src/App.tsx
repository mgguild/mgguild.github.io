import React, { lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ResetCSS } from "@metagg/mgg-uikit";
import GlobalStyle from "./style/Global";
import Menu from "components/Menu";
import SuspenseWithChunkError from "components/SuspenseWithChunkError";
import PageLoader from "components/PageLoader";
import Footer from "components/Footer";
import ToastListener from "components/ToastListener";

const Website: React.FC = () => {
  const Homepage = lazy(() => import("./Pages/Homepage"));
  const RevenueModel = lazy(() => import('./Pages/Revenue-Model'));
  const Team = lazy(() => import('./Pages/Team'))
  const Roadmap = lazy(() => import("./Pages/Roadmap"));
  const MggToken = lazy(() => import("./Pages/MggToken"));
  const Partners = lazy(() => import("./Pages/Partners"));
  const Whitepaper = lazy(() => import("./Pages/Whitepaper"));
  const NFT = lazy(() => import("./Pages/NFTpage"));
  // const NotFound = lazy(() => import("./NotFound"));
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
            {/* Redirects
            {/* <Route path="/" element={<Navigate replace to='/homepage' />} /> */}
            {/* 404 */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          <Footer />
        </SuspenseWithChunkError>
      </Menu>
    <ToastListener />
    </HashRouter>
  );
};

export default Website;
