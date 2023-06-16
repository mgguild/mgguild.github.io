import { ExchangesConfig } from "./types";

import GateIo from '../../assets/logo/Exchanges/gateIo.png'
import Huobi from '../../assets/logo/Exchanges/huobi.png'
import Mexc from '../../assets/logo/Exchanges/mexc.png'
import Pancakeswap from '../../assets/logo/Exchanges/pancakeswap.png'
import Uniswap from '../../assets/logo/Exchanges/uniswap.png'
import Spookyswap from '../../assets/logo/Exchanges/spookyswap.png'

const Exchanges:ExchangesConfig[] = [
  {
    name: 'Huobi',
    image: Huobi,
    link: 'https://www.huobi.com/en-us/exchange/mgg_usdt/'
  },
  {
    name: 'Gate.io',
    image: GateIo,
    link: 'https://www.gate.io/trade/MGG_USDT'
  },
  {
    name: 'PancakeSwap',
    image: Pancakeswap,
    link: 'https://pancakeswap.finance/swap'
  },
  {
    name: 'UniSwap',
    image: Uniswap,
    link: 'https://app.uniswap.org/#/swap?chain=mainnet'
  },
  {
    name: 'SpookySwap',
    image: Spookyswap,
    link: 'https://spooky.fi/#/swap'
  },
]

export default Exchanges