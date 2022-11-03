import { css } from 'lit';
import { customElement, html, LitElement } from 'lit-element';
import '../FaucetTool';

@customElement('swivel-sidebar')
export class ConnectWallet extends LitElement {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    static styles = css`
        .sidebar {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            padding: 5px;
            position: fixed;
            top: 60px;
            height: calc(100vh - 60px);
            border-right: 1px solid gray;
            background: #eeeeee;
            width: 300px;
        }
    `;

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <div class="sidebar">
                <swivel-faucet-tool></swivel-faucet-tool>
            </div>
        `;
    }
}
