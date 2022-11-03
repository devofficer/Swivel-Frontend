interface IWallet {
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
    | { type: 'DISCONNECT'; };

type WalletTypeState = {
    value: 'unconnected' | 'connecting' | 'connected';
    context: WalletContext;
};

export { IWallet, WalletContext, WalletEvent, WalletTypeState };
