import { css } from 'lit';
import { customElement, html, LitElement } from 'lit-element';
import WalletController from '../../controllers/wallet';
import '../Button';

@customElement('swivel-wallet-connect')
export class WalletConnect extends LitElement {
    private wallet = new WalletController(this);

    static styles = css`
        .container {
            width: 200px;
        }
    `;

    private _connect = (): void => {
        if (this.wallet.status === 'connected')
            this.wallet.send('DISCONNECT');
        else 
            this.wallet.send('CONNECT');
    };

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <div class='container'>
                <swivel-button 
                    fullWidth
                    text="${ !this.wallet.state?.connected ? 'Connect MetaMask' : 'Disconnect' }" 
                    disabled="${ this.wallet.status == 'connecting' ? 'true' : 'false' }"
                    loading="${ this.wallet.status == 'connecting' ? 'true' : 'false' }"
                    @click=${ this._connect }
                ></swivel-button>
            </div>
        `;
    }
}
