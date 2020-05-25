"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DispatcherEvent_1 = require("./DispatcherEvent");
/**
 *
 */
class Dispatcher {
    /**
     * Constructor
     */
    constructor() {
        this.events = {};
    }
    /**
     * Test
     *
     * @return {string} [description]
     */
    static test() {
        return 'foo';
    }
    /**
     * Dispatch
     *
     * @param {string} eventName [description]
     * @param {any =         {}}        data [description]
     */
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
    /**
     * On
     *
     * @param {string}  eventName [description]
     * @param {any) =>        void}        callback [description]
     */
    on(eventName, callback) {
        let event = this.events[eventName];
        if (!event) {
            event = new DispatcherEvent_1.default(eventName);
            this.events[eventName] = event;
        }
        event.registerCallback(callback);
    }
    /**
     * Off
     *
     * @param {string}  eventName [description]
     * @param {any) =>        void}        callback [description]
     */
    off(eventName, callback) {
        const event = this.events[eventName];
        if (event && event.callbacks.indexOf(callback) > -1) {
            event.unregisterCallback(callback);
            if (event.callbacks.length === 0) {
                delete this.events[eventName];
            }
        }
    }
}
exports.default = Dispatcher;
