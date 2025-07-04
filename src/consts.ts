import { ethers } from 'ethers';
import * as config from './configuration';

import MulticallABI from '../abis/Multicall.json';
import PendleYieldTokenABI from '../abis/PendleYieldToken.json';
import PendleMarketABI from '../abis/PendleMarket.json';
import PendleYieldContractFactoryABI from '../abis/PendleYieldContractFactory.json';
import PendleOracleABI from '../abis/PendleOracle.json';

const RPCS = {
  1: 'https://eth.llamarpc.com',
  42161: 'https://arbitrum-one-rpc.publicnode.com',
  56: 'https://binance.llamarpc.com',
  5000: 'https://rpc.mantle.xyz',
  8453: 'https://base.llamarpc.com',
  146: 'https://rpc.soniclabs.com',
  80094: 'https://berachain.drpc.org'
};

const MULTICALLS = {
  1: '0xcA11bde05977b3631167028862bE2a173976CA11',
  42161: '0xcA11bde05977b3631167028862bE2a173976CA11',
  56: '0xcA11bde05977b3631167028862bE2a173976CA11',
  5000: '0xcA11bde05977b3631167028862bE2a173976CA11',
  8453: '0xcA11bde05977b3631167028862bE2a173976CA11',
  146: '0xcA11bde05977b3631167028862bE2a173976CA11',
  80094: '0xcA11bde05977b3631167028862bE2a173976CA11'
};

export const PENDLE_TREASURY = '0xc328dfcd2c8450e2487a91daa9b75629075b7a43';
export const PENDLE_ORACLE = '0x9a9fa8338dd5e5b2188006f1cd2ef26d921650c2';
export const MULTICALL_BATCH_SIZE = 50;
export const ORACLE_INTERVAL = 15;
export const ONE_YEAR = 86400 * 365;
export const _1E18 = ethers.BigNumber.from(10).pow(18);
export const PROVIDER = new ethers.providers.JsonRpcProvider(
  RPCS[config.CHAIN]
);
export const MULTICALL_ADDRESS = MULTICALLS[config.CHAIN];

export const ABIs = {
  multicall: MulticallABI,
  pendleYieldToken: PendleYieldTokenABI,
  pendleMarket: PendleMarketABI,
  pendleYieldContractFactory: PendleYieldContractFactoryABI,
  pendleOracle: PendleOracleABI
};

export const Contracts = {
  multicall: new ethers.Contract(MULTICALL_ADDRESS, ABIs.multicall, PROVIDER),
  oracle: new ethers.Contract(PENDLE_ORACLE, ABIs.pendleOracle, PROVIDER),
  yieldTokenInterface: new ethers.utils.Interface(ABIs.pendleYieldToken),
  marketInterface: new ethers.utils.Interface(ABIs.pendleMarket)
};
