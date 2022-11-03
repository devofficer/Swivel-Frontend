interface IWallet {
    connected: boolean;
    address: string;
    ethAmount: number;
    daiAmount: number;
}

interface WalletContext {
    wallet?: IWallet;
    error?: string;
}

type WalletEvent =
    | { type: 'CONNECT'; }
    | { type: 'DISCONNECT'; }
    | { type: 'FAUCET'; address: string, amount: number}
    | { type: 'FETCH', address: string};

type WalletTypeState = {
    value: 'unconnected' 
    | 'connecting' 
    | 'connected' 
    | 'faucetPending' 
    | 'faucetCompleted' 
    | 'fetching' 
    | 'fetchingCompleted';
    context: WalletContext;
};

export { IWallet, WalletContext, WalletEvent, WalletTypeState };
