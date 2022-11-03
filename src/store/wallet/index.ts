import { createMachine, interpret } from 'xstate';
import { WalletContext, WalletEvent, WalletTypeState } from './types';

const initialValue = 'unconnected';
const initialContext: WalletContext = {
    wallet: {
        address: '',
        ethAmount: 0,
        daiAmount: 0,
    },
};

const walletMachine = createMachine<WalletContext, WalletEvent, WalletTypeState>(
    {
        id: 'wallet',
        initial: initialValue,
        context: initialContext,
        states: {
            unconnected: {
                
            },
            connecting: {
                
            },
            connected: {

            },
        },
    },
    {
        actions: {

        },
    },
);

const walletService = interpret(walletMachine).start();

console.log(walletService);

export { walletMachine, walletService };
