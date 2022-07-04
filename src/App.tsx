import React, { lazy } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation} from "react-router-dom";
import { ResetCSS } from "@metagg/mgg-uikit";
import GlobalStyle from "./style/Global";
import Menu from "components/Menu";
import SuspenseWithChunkError from "components/SuspenseWithChunkError";
import PageLoader from "components/PageLoader";
import Footer from "components/Footer";


const Redirects = ({...rest}) => {
  const location = useLocation()

  console.log(location.pathname)
  // If the last character of the url is '/'
  if (location.pathname.length > 0) {
      return <Navigate replace {...rest} to='/' />
  } else return null;
}

const Website: React.FC = () => {
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
      {/* <RemoveTrailingSlash /> */}
      <ResetCSS />
      <GlobalStyle />
      <Menu>
       <SuspenseWithChunkError fallback={<PageLoader />}>
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path='/revenue-model' element={<RevenueModel /> } />
            <Route path="/team" element={<Team />} />
            {/* <Route path="/homepage" element={<Homepage />} /> */}
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/mgg-token" element={<MggToken />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/White-Paper" element={<Whitepaper />} />
            <Route path="/mgg-NFTs" element={<NFT />} />
            <Route path="*" element={<Navigate replace to='/home' />} />
          </Routes>
          <Footer />
        </SuspenseWithChunkError>
      </Menu>

    </HashRouter>
  );
};

export default Website;
