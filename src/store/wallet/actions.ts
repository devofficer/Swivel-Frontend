/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from 'ethers';
import ERC20ABI from '../../abi/erc20.abi';
import { Network } from '../../constants';
import { IWallet, WalletEvent } from './types';

declare global {
    interface Window {
        ethereum?: any;
    }
}

const provider = new ethers.providers.Web3Provider(window.ethereum);

const connectWallet = async (): Promise<IWallet> => {
    if (window.ethereum) {
        await provider.send('wallet_switchEthereumChain', [{ chainId: Network.chainId }]);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const rawBalance = await signer.getBalance();
        const balance = ethers.utils.formatEther(rawBalance);
        
        const DAI = new ethers.Contract(Network.address.DAI, ERC20ABI, provider);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        const DAIRawBalance = await DAI.balanceOf(address);
        const DAIBalance = ethers.utils.formatEther(DAIRawBalance);
        return {
            connected: true,
            address,
            ethAmount: Number(balance),
            daiAmount: Number(DAIBalance),
        };
    } else {
        alert('Please Install MetaMask');
        return {
            connected: false,
            address: '',
            ethAmount: 10,
            daiAmount: 10,
        };
    }
};

const faucetDAI = async (event: WalletEvent): Promise<{daiAmount: number}> => {

    console.log('faucet-start');
    if (event.type !== 'FAUCET' || !event.address || !event.amount)
        return { daiAmount: 0 };
        
    const address = event.address;
    const amount = event.amount;

    if (window.ethereum) {
        const DAIAmount = ethers.utils.parseEther(amount.toString());
        const DAI = new ethers.Contract(Network.address.DAI, ERC20ABI, provider.getSigner());
        const tx = await DAI.allocateTo(address, DAIAmount);
        await tx.wait();
        const DAIRawBalance = await DAI.balanceOf(address);
        const DAIBalance = ethers.utils.formatEther(DAIRawBalance);
        return {
            daiAmount: Number(DAIBalance),
        };
    } else {
        alert('Please Install MetaMask');
        return {
            daiAmount: 0,
        };
    }
};

export { connectWallet, faucetDAI };

