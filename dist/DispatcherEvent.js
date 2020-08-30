"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DispatcherEvent {
    constructor(eventName, data = {}) {
        this.eventName = eventName;
        this.callbacks = [];
    }
    clearCallbacks() {
        this.callbacks = {};
    }
    registerCallback(callback) {
        this.callbacks.push(callback);
    }
    unregisterCallback(callback) {
        const index = this.callbacks.indexOf(callback);
        if (index > -1) {
            this.callbacks.splice(index, 1);
        }
    }
    fire(data) {
        const callbacks = this.callbacks.slice(0);
        callbacks.forEach((callback) => {
            callback(data);
        });
    }
}
exports.default = DispatcherEvent;
//# sourceMappingURL=DispatcherEvent.js.map