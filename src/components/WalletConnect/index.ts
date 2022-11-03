import { customElement, html, LitElement } from 'lit-element';
import '../Button';

@customElement('swivel-wallet-connect')
export class WalletConnect extends LitElement {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <swivel-button text="Connect MetaMask"></swivel-button>
        `;
    }
}
