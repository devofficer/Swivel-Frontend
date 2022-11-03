import { css } from 'lit';
import { customElement, html, LitElement, property } from 'lit-element';

@customElement('swivel-button')
export class SwivelButton extends LitElement {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    static styles = css`
        button {
            outline: none;
            padding: 10px;
            font-size: 16px;
            background: #1a73e8;
            color: white;
            border-radius: 4px;
            border: 1px solid transparent;
            cursor: pointer;
        }

        button:hover {
            background: #4285f4;
        }

        button:active {
            background: #5094ed;
        }

        .full-width {
            width: 100%;
        }
    `;

    @property({ type: String }) text = 'Swivel Button'; 

    @property({ type: Boolean }) fullWidth = false;
    
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return this.fullWidth 
            ? html`<button class="full-width">${ this.text }</button>` 
            : html`<button>${ this.text }</button>`;
    }
}
