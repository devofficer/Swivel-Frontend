/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ReactiveController, ReactiveControllerHost } from 'lit';
import { walletMachine, walletService } from '../../store/wallet';

export default class AppController implements ReactiveController {
    host: ReactiveControllerHost;

    private _walletStore = {
        machine: walletMachine,
        service: walletService,
    };

    constructor (host: ReactiveControllerHost) {
        (this.host = host).addController(this);
    }

    get walletInfo () {
        return this._walletStore.machine.context.wallet;
    }

    hostConnected () {
        this._walletStore.service.start();
        console.log('service started');
    }

    hostDisconnected () {
        console.log('disconnected');
    }
}