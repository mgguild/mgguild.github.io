import React, { lazy } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { ResetCSS } from "@metagg/mgg-uikit";
import Menu from "components/menu/index.";
import SuspenseWithChunkError from "components/SuspenseWithChunkError";
import PageLoader from "components/PageLoader";
import GlobalStyle from "style/Global";

const Website: React.FC = () => {
  const Homepage = lazy(() => import("./Homepage"));
  const Roadmap = lazy(() => import("./Roadmap"));
  const NotFound = lazy(() => import("./NotFound"));
  return (
    <HashRouter>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/roadmap" element={<Roadmap />} />
            {/* Redirects */}
            <Route path="/" element={<Navigate replace to='/home' />} />
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SuspenseWithChunkError>
      </Menu>
    </HashRouter>
  );
};

export default Website;
