// @ts-nocheck
import React from "react";
import {Web3ReactProvider} from '@web3-react/core'
import {ModalProvider} from '@metagg/mgg-uikit'
import {getLibrary} from 'utils/web3React'
import {ThemeContextProvider} from "contexts/ThemeContext";
import {ToastsProvider} from 'contexts/ToastsContext'

const Providers: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <ToastsProvider>
                <ThemeContextProvider>
                    <ModalProvider>
                        {children}
                    </ModalProvider>
                </ThemeContextProvider>
            </ToastsProvider>
        </Web3ReactProvider>
    );
};

export default Providers;
