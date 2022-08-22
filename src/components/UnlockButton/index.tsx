import React from 'react'
import { Button, useWalletModal } from '@metagg/mgg-uikit'
import useAuth from 'hooks/useAuth'
import { useWeb3React } from '@web3-react/core'

const UnlockButton = (props) => {
  const { customTitle } = props
  const { login, logout } = useAuth()
  const { account } = useWeb3React()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return !account? (
    <Button onClick={(onPresentConnectModal)} {...props}>
      {!customTitle ? 'Connect Wallet' : customTitle}
    </Button>
  ) : (
    <Button onClick={() => logout()}>
      { account }
    </Button>
  )
}

export default UnlockButton
