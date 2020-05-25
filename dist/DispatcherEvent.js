"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
class DispatcherEvent {
    /**
     * Constructor
     */
    constructor(eventName, data = {}) {
        // super(eventName, data);
        this.eventName = eventName;
        this.callbacks = [];
    }
    /**
     * Register Callback
     *
     * @param {any) => void} callback [description]
     */
    registerCallback(callback) {
        this.callbacks.push(callback);
    }
    /**
     * Unregister Callback
     *
     * @param {any) => void} callback [description]
     */
    unregisterCallback(callback) {
        const index = this.callbacks.indexOf(callback);
        if (index > -1) {
            this.callbacks.splice(index, 1);
        }
    }
    /**
     * Fire
     *
     * @param {any} data [description]
     */
    fire(data) {
        const callbacks = this.callbacks.slice(0);
        callbacks.forEach((callback) => {
            callback(data);
        });
    }
}
exports.default = DispatcherEvent;
