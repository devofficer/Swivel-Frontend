import { css } from 'lit';
import { customElement, html, LitElement } from 'lit-element';

@customElement('swivel-wallet-connect')
export class ConnectWallet extends LitElement {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    static styles = css`
        button {
            outline: none;
            padding: 10px;
            font-size: 16px;
            background: #1a73e8;
            color: white;
            border-radius: 4px;
            border: 1px solid transparent;
            cursor: pointer;
        }

        button:hover {
            background: #4285f4;
        }

        button:active {
            background: #5094ed;
        }
    `;

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <button >Connect MetaMask</button>
        `;
    }
}
