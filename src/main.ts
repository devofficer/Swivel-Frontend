/**
 * This is your entrypoint.
 *
 * Add your imports and any startup logic here. This file will be imported by
 * `index.html` and is the entry point for the rollup configuration.
*/

import { customElement, html, LitElement } from 'lit-element';
import './components/Navbar';
import './components/Viewport';

@customElement('swivel-app')
export class App extends LitElement {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <swivel-navbar></swivel-navbar>
            <swivel-viewport></swivel-viewport>
        `;
    }
}

console.log('app started...');