export const BASE_URL = process.env.REACT_APP_BASE_URL!;

export const opBnbChainNetworkParams = {
  chainId: "0x15EB",
  chainName: "opBNB Testnet",
  nativeCurrency: {
    name: "BNB",
    symbol: "tBNB",
    decimals: 18,
  },
  rpcUrls: ["https://opbnb-testnet-rpc.bnbchain.org"],
  blockExplorerUrls: ["https://opbnbscan.com/"],
};
