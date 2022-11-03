/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from 'ethers';
import { IWallet } from './types';

declare global {
    interface Window {
        ethereum?: any;
    }
}

const provider = new ethers.providers.Web3Provider(window.ethereum);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const connectWallet = async (): Promise<IWallet> => {
    if (window.ethereum) {
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const rawBalance = await signer.getBalance();
        const balance = ethers.utils.formatEther(rawBalance);
        return {
            address,
            ethAmount: 10,
            daiAmount: 10,
        };
    } else {
        alert('Please Install MetaMask');
        return {
            address: '',
            ethAmount: 10,
            daiAmount: 10,
        };
    }
};

export { connectWallet };

