import { css } from 'lit';
import { customElement, html, LitElement } from 'lit-element';

@customElement('swivel-content')
export class Content extends LitElement {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    static styles = css`
        .viewport-content {
            padding-left: 300px;
        }
    `;

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <div class="viewport-content">
                asdfasdfasdf
            </div>
        `;
    }
}
