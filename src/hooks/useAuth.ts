import { useCallback } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { NoBscProviderError } from "@binance-chain/bsc-connector";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
// import { ConnectorNames, connectorLocalStorageKey } from '@pancakeswap/uikit'
import { ConnectorId } from "@metagg/mgg-uikit";
import { connectorsByName } from "utils/web3React";
import { setupNetwork } from "utils/wallet";
// import useToast from 'hooks/useToast'
// import { profileClear } from 'state/profile'
// import { useAppDispatch } from 'state'
// import { useTranslation } from 'contexts/Localization'

const useAuth = () => {
  // const { t } = useTranslation()
  // const dispatch = useAppDispatch()
  const { activate, deactivate } = useWeb3React();
  // const { toastError } = useToast()

  const login = useCallback(
    (connectorID: ConnectorId) => {
      const connector = connectorsByName[connectorID];
      if (connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetwork();
            if (hasSetup) {
              activate(connector);
            }
          } else {
            window.localStorage.removeItem("1");
            if (
              error instanceof NoEthereumProviderError ||
              error instanceof NoBscProviderError
            ) {
              console.info("Provider Error", "No provider was found");
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector;
                walletConnector.walletConnectProvider = undefined;
              }
              console.info(
                "Authorization Error",
                "Please authorize to access your account"
              );
            } else {
              console.error(error.name, error.message);
            }
          }
        });
      } else {
        console.info(
          "Unable to find connector",
          "The connector config is wrong"
        );
      }
    },
    [activate]
  );

  const logout = useCallback(() => {
    // dispatch(profileClear())
    deactivate();
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem("walletconnect")) {
      connectorsByName.walletconnect.close();
      connectorsByName.walletconnect.walletConnectProvider = null;
    }
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
