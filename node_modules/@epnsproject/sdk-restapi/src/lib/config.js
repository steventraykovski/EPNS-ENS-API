"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_BASE_URL = void 0;
const constants_1 = require("./constants");
const { ENV } = constants_1.default;
// for methods not needing the entire config
exports.API_BASE_URL = {
    [ENV.PROD]: 'https://backend.epns.io/apis',
    [ENV.STAGING]: 'https://backend-staging.epns.io/apis',
    [ENV.DEV]: 'https://backend-dev.epns.io/apis'
};
const BLOCKCHAIN_NETWORK = {
    ETH_MAINNET: 'eip155:1',
    ETH_KOVAN: 'eip155:42',
    POLYGON_MAINNET: 'eip155:137',
    POLYGON_MUMBAI: 'eip155:80001'
};
const CONFIG = {
    [ENV.PROD]: {
        [BLOCKCHAIN_NETWORK.ETH_MAINNET]: {
            API_BASE_URL: exports.API_BASE_URL[ENV.PROD],
            EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa'
        },
        [BLOCKCHAIN_NETWORK.POLYGON_MAINNET]: {
            API_BASE_URL: exports.API_BASE_URL[ENV.PROD],
            EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa'
        }
    },
    [ENV.STAGING]: {
        [BLOCKCHAIN_NETWORK.ETH_KOVAN]: {
            API_BASE_URL: exports.API_BASE_URL[ENV.STAGING],
            EPNS_COMMUNICATOR_CONTRACT: '0x87da9Af1899ad477C67FeA31ce89c1d2435c77DC'
        },
        [BLOCKCHAIN_NETWORK.POLYGON_MUMBAI]: {
            API_BASE_URL: exports.API_BASE_URL[ENV.STAGING],
            EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa'
        }
    },
    [ENV.DEV]: {
        [BLOCKCHAIN_NETWORK.ETH_KOVAN]: {
            API_BASE_URL: exports.API_BASE_URL[ENV.DEV],
            EPNS_COMMUNICATOR_CONTRACT: '0x99047d328496C14016222a998564B334A4A5723f'
        },
        [BLOCKCHAIN_NETWORK.POLYGON_MUMBAI]: {
            API_BASE_URL: exports.API_BASE_URL[ENV.DEV],
            EPNS_COMMUNICATOR_CONTRACT: '0xAf55BE8e6b0d6107891bA76eADeEa032ef8A4504'
        }
    }
};
exports.default = CONFIG;
//# sourceMappingURL=config.js.map