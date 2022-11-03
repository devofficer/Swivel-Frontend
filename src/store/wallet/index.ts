/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { assign, createMachine, interpret } from 'xstate';
import { connectWallet, faucetDAI, fetchTransactions } from './actions';
import { WalletContext, WalletEvent, WalletTypeState } from './types';

const initialValue = 'unconnected';
const initialContext: WalletContext = {
    wallet: {
        connected: false,
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
                on: {
                    CONNECT: {
                        target: 'connecting',
                    },
                },
            },
            connecting: {
                invoke: {
                    id: 'connect-wallet',
                    src: () => connectWallet,
                    onDone: {
                        target: 'fetchPending',
                        actions: assign({ wallet: (context, event) => event.data }),
                    },
                },        
            },
            connected: {
                on: {
                    FAUCET: {
                        target: 'faucetPending',
                    },
                    FETCH: {
                        target: 'fetchPending',
                    },
                },
            },
            faucetPending: {
                invoke: {
                    id: 'faucet-pending',
                    src: (context, event) => async () => faucetDAI(event),
                    onDone: {
                        target: 'fetchPending',
                        actions: assign({ wallet: (context, event) => {
                            if (!context.wallet) return context.wallet;
                            const updatedWallet = context.wallet;
                            updatedWallet.daiAmount = event.data.daiAmount;
                            return updatedWallet;
                        } }),
                    },
                },  
            },
            fetchPending: {
                invoke: {
                    id: 'fetch-pending',
                    src: (context, event) => async () => fetchTransactions(event, context.wallet?.address),
                    onDone: {
                        target: 'connected',
                        actions: assign({ wallet: (context, event) => {
                            if (!context.wallet) return context.wallet;
                            const updatedWallet = context.wallet;
                            updatedWallet.daiAmount = event.data.daiAmount;
                            return updatedWallet;
                        } }),
                    },
                },
            },
        },
    },
    // {
    //     actions: {
    //         onConnected: (context, event) => {
    //             console.log(event.data);
    //         }
    //     },
    // },
);

console.log('machine creating');

const walletService = interpret(walletMachine).start();

export { walletMachine, walletService };
