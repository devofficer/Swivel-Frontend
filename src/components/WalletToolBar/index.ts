import { css, nothing, TemplateResult } from 'lit';
import { customElement, html, LitElement } from 'lit-element';
import WalletController from '../../controllers/wallet';
import { formatBalance, formatWalletAddress } from '../../utils/formatter';
import '../WalletConnect';

@customElement('swivel-wallet-toolbar')
export class WalletToolBar extends LitElement {
    private wallet = new WalletController(this);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    static styles = css`
        .container {
            display: flex;
            align-items: center;
        }

        .container > * {
            margin: 0px 5px;
        }

        .balance-container {
            display: flex;
        }

        .balance {
            background: #eee;
            padding: 5px 10px;
            border-radius: 4px 0px 0px 4px;
        }

        .symbol {
            background: #ccc;
            padding: 5px;
            border-radius: 0px 4px 4px 0px;
        }

        .address {
            cursor: pointer;
        }
    `;

    handleCopyAddress = async (): Promise<void> => {
        const address = this.wallet.state?.address;
        if (!address) return;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        await navigator.clipboard.writeText(address);
    };

    walletAddress = (): TemplateResult => {
        const formattedAddress = formatWalletAddress(this.wallet.state?.address);
        return html`<div class="address" @click=${ this.handleCopyAddress }>${ formattedAddress }</div>`;
    };

    walletBalance = (balance: number): TemplateResult => {
        const formattedBalance = formatBalance(balance);
        return html`${ formattedBalance }`;
    };

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render () {
        return html`
            <div class="container">
                ${ this.wallet.state?.connected 
        ? html`
            <div class="balance-container">
                <div class="balance">${ this.walletBalance(this.wallet.state.daiAmount) }</div>
                <div class="symbol">DAI</div>
            </div>
            <div class="balance-container">
                <div class="balance">${ this.walletBalance(this.wallet.state.ethAmount) }</div>
                <div class="symbol">ETH</div>                    
            </div>
            ${ this.walletAddress() }
        ` 
        : nothing 
}
                <swivel-wallet-connect></swivel-wallet-connect>
            </div>
        `;
    }
}
