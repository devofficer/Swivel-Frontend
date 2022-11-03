import { css } from 'lit';
import { customElement, html, LitElement } from 'lit-element';
import '../Logo';
import '../WalletToolBar';

@customElement('swivel-navbar')
export class Navbar extends LitElement {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    static styles = css`
        .navbar-container {
            position: fixed;
            height: 60px;
            width: 100vw;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid gray;
            background: white;
        }
    `;

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <div class="navbar-container">
                <swivel-logo></swivel-logo>
                <swivel-wallet-toolbar></swivel-wallet-toolbar>
            </div>
        `;
    }
}
