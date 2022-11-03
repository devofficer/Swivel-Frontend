import { css } from 'lit';
import { customElement, html, LitElement, property } from 'lit-element';
import '../Button';
import '../HistoryItem';

@customElement('swivel-content')
export class Content extends LitElement {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    static styles = css`
        .viewport-content {
            padding-left: 300px;
        }

        .tool-container {
            padding: 15px;
            border-bottom: 1px solid gray;
        }

        .history-content {
            padding: 15px;
        }
    `;

    @property() items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <div class="viewport-content">
                <div class="tool-container">
                    <swivel-button text="Refresh"></swivel-button>
                </div>
                <div class="history-content">
                    ${ this.items.map((item, index) => 
        html`<swivel-history-item amount=${ index }></swivel-history-item>`) }
                </div>
            </div>
        `;
    }
}
