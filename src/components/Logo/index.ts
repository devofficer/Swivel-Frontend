import { css } from 'lit';
import { customElement, html, LitElement } from 'lit-element';

@customElement('swivel-logo')
export class Logo extends LitElement {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    static styles = css`
        h3 {
            margin: 0px;
            padding: 10px 15px;
            color: black;
        }
    `;

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <h3 class="logo-text">Swivel Homework</h3>
        `;
    }
}
