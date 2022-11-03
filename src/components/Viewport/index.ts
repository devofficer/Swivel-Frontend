import { css } from 'lit';
import { customElement, html, LitElement } from 'lit-element';
import '../Content';
import '../Sidebar';

@customElement('swivel-viewport')
export class ViewPort extends LitElement {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    static styles = css`
        .viewport {
            padding-top: 60px;
        }
    `;

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <div class="viewport">
                <swivel-sidebar></swivel-sidebar>
                <swivel-content></swivel-content>
            </div>
        `;
    }
}
