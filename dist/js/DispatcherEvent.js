System.register([], function (exports_1, context_1) {
    "use strict";
    var DispatcherEvent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            DispatcherEvent = class DispatcherEvent {
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
            };
            exports_1("default", DispatcherEvent);
        }
    };
});
//# sourceMappingURL=DispatcherEvent.js.map