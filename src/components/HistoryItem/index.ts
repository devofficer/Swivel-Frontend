import { css } from 'lit';
import { customElement, html, LitElement, property } from 'lit-element';
import { formatWalletAddress } from '../../utils/formatter';

@customElement('swivel-history-item')
export class Content extends LitElement {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    static styles = css`
        .history-item {
            margin-bottom: 30px;
        }

        .line {
            display: flex;
            align-items: center;
            margin: 5px 0px;
        }

        .label {
            display: block;
            width: 100px;
        }

        .symbol {
            padding: 2px;
            color: white;
            background: #ccc;
            margin-left: 3px;
            border-radius: 4px;
        }
    `;
    
    @property({ type: String }) symbol = 'ETH';

    @property({ type: String }) date = '';

    @property({ type: String }) from = '';

    @property({ type: String }) to = '';

    @property({ type: Number }) amount = 0.0;

    @property({ type: Number }) fee = 0.0;

    @property({ type: String }) etherscan = '';

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <div class="history-item">
                <div class='line'>
                    <span class="label">Date:</span>
                    <span class="value">${ this.date }</span>
                </div>
                <div class='line'>
                    <span class="label">From:</span>
                    <span class="value">${ this.from }</span>
                </div>
                <div class='line'>
                    <span class="label">To:</span>
                    <span class="value">${ this.to }</span>
                </div>
                <div class='line'>
                    <span class="label">Amount:</span>
                    <span class="value">${ this.amount.toFixed(2) }</span>
                    <span class="symbol">${ this.symbol }</span>
                </div>
                <div class='line'>
                    <span class="label">Fee:</span>
                    <span class="value">${ this.fee.toFixed(2) }</span>
                    <span class="symbol">${ this.symbol }</span>
                </div>
                <div class='line'>
                    <span class="label">Etherscan:</span>
                    <span class="value">
                        <a href="https://goerli.etherscan.io/tx/${ this.etherscan }">
                            ${ formatWalletAddress(this.etherscan) }
                        </a>
                    </span>
                </div>
            </div>
        `;
    }
}
