import { css } from 'lit';
import { customElement, html, LitElement, query } from 'lit-element';
import WalletController from '../../controllers/wallet';
import '../Button';

@customElement('swivel-faucet-tool')
export class FaucetTool extends LitElement {
    private wallet = new WalletController(this);
    
    static styles = css`
        .container {
            display: flex;
            flex-direction: column;
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
    `;

    @query('input')
    _input!: HTMLInputElement;

    handleFaucet = (): void => {
        const amount = Number(this._input.value);
        if (!this.wallet.state?.connected) {
            alert('Please connect your MetaMask');
            return;
        }

        if (amount <= 0) {
            alert('Please input valid amount');
            return;
        }
        this.wallet.send('FAUCET', { address: this.wallet.state?.address, amount });
    };

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        console.log(this.wallet.status == 'unconnected');
        return html`
            <div class="container">
                <div class="faucet-input-container">
                    <input type="text" placeholder="Amount" />
                    <span class="faucet-input-label">DAI</span>
                </div>
                <swivel-button 
                    fullWidth 
                    disabled="${ this.wallet.status == 'connected' ? 'false' : 'true' }"
                    loading="${ this.wallet.status == 'faucetPending' ? 'true' : 'false' }"
                    text="Faucet" 
                    @click=${ this.handleFaucet }
                />
            </div>
        `;
    }
}
