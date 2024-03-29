import DispatcherEvent from './DispatcherEvent';
export default class Dispatcher {
    constructor() {
        this.events = {};
    }
    trigger(eventName, data = {}) {
        return this.dispatch(eventName, data);
    }
    dispatch(eventName, data = {}) {
        const event = this.events[eventName];
        if (event) {
            event.fire({
                data: data,
                event: {
                    name: eventName,
                },
                target: this,
            });
        }
    }
    on(eventName, callback) {
        let event = this.events[eventName];
        if (!event) {
            event = new DispatcherEvent(eventName);
            this.events[eventName] = event;
        }
        event.registerCallback(callback);
    }
    off(eventName, callback) {
        const event = this.events[eventName];
        if (event && !callback) {
            event.clearCallbacks();
            delete this.events[eventName];
        }
        else if (event && callback && event.callbacks.indexOf(callback) > -1) {
            event.unregisterCallback(callback);
            if (event.callbacks.length === 0) {
                delete this.events[eventName];
            }
        }
    }
}
//# sourceMappingURL=Dispatcher.js.map