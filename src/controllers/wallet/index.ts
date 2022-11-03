/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ReactiveController, ReactiveControllerHost } from 'lit';
import { walletMachine, walletService } from '../../store/wallet';

export default class WalletController implements ReactiveController {
    host: ReactiveControllerHost;

    private _walletStore = {
        machine: walletMachine,
        service: walletService,
    };

    constructor (host: ReactiveControllerHost) {
        (this.host = host).addController(this);
    }

    get status () {
        return this._walletStore.service.getSnapshot().value;
    }

    get state () {
        return this._walletStore.service.getSnapshot().context.wallet;
    }

    get send () {
        return this._walletStore.service.send;
    }

    hostConnected () {
        this._walletStore.service.onTransition((state) => {
            if (state.changed) this.host.requestUpdate();
        });
    }

    hostDisconnected () {
        this._walletStore.service.stop();
        console.log('disconnected');
    }
}