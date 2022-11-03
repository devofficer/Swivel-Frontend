import { ReactiveController, ReactiveControllerHost } from 'lit';

export default class AppController implements ReactiveController {
    host: ReactiveControllerHost;

    value = new Date();

    constructor (host: ReactiveControllerHost) {
        (this.host = host).addController(this);
    }

    hostConnected () {
        console.log('connected');
    }

    hostDisconnected () {
        console.log('disconnected');
    }
}