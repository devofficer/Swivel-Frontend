import { css } from 'lit';
import { customElement, html, LitElement } from 'lit-element';
import '../WalletConnect';

@customElement('swivel-wallet-toolbar')
export class WalletToolBar extends LitElement {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    static styles = css`
        .container {
            display: flex;
            align-items: center;
        }

        .container > * {
            margin: 0px 5px;
        }
    `;

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <div class="container">
                <div>DAI Amount</div>
                <div>ETH Amount</div>
                <div>Walellet Address</div>
                <swivel-wallet-connect></swivel-wallet-connect>
            </div>
        `;
    }
}
