import { css } from 'lit';
import { customElement, html, LitElement } from 'lit-element';

@customElement('swivel-faucet-tool')
export class ConnectWallet extends LitElement {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    static styles = css`
        .container {
            width: 100%;
        }

        .faucet-input-container {
            padding: 5px;
            display: flex;
            margin-bottom: 5px;
            align-items: stretch;
            border: 1px solid gray;
            border-radius: 4px;
        }

        .faucet-input-container input {
            width: 200px;
            height: 30px;
            border: none;
            outline: none;
            margin-right: 3px;
            background: transparent;
        }

        .faucet-input-label {
            color: white;
            height: 30px;
            padding: 2px 5px;
            background: #ccc;
            line-height: 30px;
            border-radius: 4px;
        }

        button {
            width: 100%;
            color: white;
            outline: none;
            padding: 10px;
            cursor: pointer;
            font-size: 16px;
            background: #1a73e8;
            border-radius: 4px;
            border: 1px solid transparent;
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
            <div class="container">
                <div class="faucet-input-container">
                    <input type="text" placeholder="Amount" />
                    <span class="faucet-input-label">DAI</span>
                </div>
                <button>Faucet</button>
            </div>
        `;
    }
}
