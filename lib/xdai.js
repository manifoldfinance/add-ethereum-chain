
const addEthereumChain = document.getElementById('addEthereumChain')

addEthereumChain.onclick = async () => {
    await ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: '0x64',
        rpcUrls: ['https://dai.poa.network'],
        chainName: 'xDAI Chain',
        nativeCurrency: { name: 'xDAI', decimals: 18, symbol: 'xDAI' },
        blockExplorerUrls: ['https://blockscout.com/poa/xdai'],
      }],
    })
};