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

        .loader {
            width: 18px;
        }

        .disabled {
            background: gray !important;
        }
    `;

    @property({ type: String }) text = 'Swivel Button'; 

    @property({ type: Boolean }) fullWidth = false;

    @property({ type: String }) disabled = 'false';

    @property({ type: String }) loading = 'false';
    
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <button 
                class="${ this.fullWidth ? 'full-width' : '' } ${ this.disabled == 'true' ? 'disabled' : '' }">
                ${ this.loading == 'true'
        ? html`<image class="loader" src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" />`
        : html`${ this.text }` 
}    
            </button>
        `;
    }
}
