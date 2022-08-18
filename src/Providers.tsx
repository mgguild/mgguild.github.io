// @ts-nocheck
import React from "react";
import { Web3ReactProvider } from '@web3-react/core'
import { ModalProvider } from '@metagg/mgg-uikit'
import { getLibrary } from 'utils/web3React'
import { ThemeContextProvider } from "contexts/ThemeContext";

const Providers: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <ThemeContextProvider>
      <ModalProvider>
      {children}
      </ModalProvider>
    </ThemeContextProvider>
    </Web3ReactProvider>
  );
};

export default Providers;
