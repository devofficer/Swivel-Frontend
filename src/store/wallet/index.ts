import { assign, createMachine, interpret } from 'xstate';
import { connectWallet } from './actions';
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
                        target: 'connected',
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                        actions: assign({ wallet: (context, event) => event.data }),
                    },
                },        
            },
            connected: {

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
