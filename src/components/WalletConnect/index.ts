import { customElement, html, LitElement } from 'lit-element';
import WalletController from '../../controllers/wallet';
import '../Button';

@customElement('swivel-wallet-connect')
export class WalletConnect extends LitElement {
    private wallet = new WalletController(this);

    private _connect = (): void => {
        this.wallet.send('CONNECT');
    };

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <swivel-button 
                text="${ !this.wallet.state?.connected ? 'Connect MetaMask' : 'Disconnect' }" 
                @click=${ this._connect }
            ></swivel-button>
        `;
    }
}
