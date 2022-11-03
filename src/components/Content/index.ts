import { TemplateResult } from 'lit';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { css } from 'lit';
import { customElement, html, LitElement } from 'lit-element';
import WalletController from '../../controllers/wallet';
import '../Button';
import '../HistoryItem';

@customElement('swivel-content')
export class Content extends LitElement {
    private wallet = new WalletController(this);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    static styles = css`
        .viewport-content {
            padding-left: 300px;
        }

        .tool-container {
            padding: 15px;
            border-bottom: 1px solid gray;
        }

        .btn-container {
            width: 150px;
        }

        .history-content {
            padding: 15px;
        }

        .loading-container {
            display: flex;
            justify-content: center;
            padding-top: 200px;
        }

        .loader {
            width: 60px;
        }
    `;

    historyContent = (): TemplateResult => {
        if (this.wallet.status === 'fetchPending')
            return html`
                <div class='loading-container'>
                    <image class="loader" src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" />
                </div>
            `;

        return html`
            ${ this.wallet.history.map((item) => html`
                <swivel-history-item
                    symbol="${ 'ETH' }"
                    date="${ new Date(parseInt(item.timeStamp)) }"
                    from="${ item.from }"
                    to="${ item.to }"
                    amount="${ item.value }"
                    fee="${ item.gasUsed }"
                    etherscan="${ item.hash }"
                />
            `) }
        `;
    };

    handleFetch = (): void => {
        this.wallet.send('FETCH');
    };

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <div class="viewport-content">
                <div class="tool-container">
                    <div class="btn-container">
                        <swivel-button 
                            fullWidth
                            disabled="${ this.wallet.status != 'connected' ? 'true' : 'false' }"
                            loading="${ this.wallet.status == 'fetchPending' ? 'true' : 'false' }"
                            @click=${ this.handleFetch }
                            text="Refresh"
                        />
                    </div>
                </div>
                <div class="history-content">
                    ${ this.historyContent() }
                </div>
            </div>
        `;
    }
}
