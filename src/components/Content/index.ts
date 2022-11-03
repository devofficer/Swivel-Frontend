import { css } from 'lit';
import { customElement, html, LitElement } from 'lit-element';
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

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <div class="viewport-content">
                <div class="tool-container">
                    <swivel-button text="Refresh"></swivel-button>
                </div>
                <div class="history-content">
                </div>
            </div>
        `;
    }
}
