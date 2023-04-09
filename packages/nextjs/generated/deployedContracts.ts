const contracts = {
  11155111: [
    {
      name: "sepolia",
      chainId: "11155111",
      contracts: {
        Verifier: {
          address: "0x948a445F2A05d62f1c037D35a4ff7BE2BdF5Dad4",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256[2]",
                  name: "a",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[2][2]",
                  name: "b",
                  type: "uint256[2][2]",
                },
                {
                  internalType: "uint256[2]",
                  name: "c",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[1]",
                  name: "input",
                  type: "uint256[1]",
                },
              ],
              name: "verifyProof",
              outputs: [
                {
                  internalType: "bool",
                  name: "r",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
