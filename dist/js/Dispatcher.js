System.register(["./DispatcherEvent"], function (exports_1, context_1) {
    "use strict";
    var DispatcherEvent_1, Dispatcher;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DispatcherEvent_1_1) {
                DispatcherEvent_1 = DispatcherEvent_1_1;
            }
        ],
        execute: function () {
            Dispatcher = class Dispatcher {
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
                        event = new DispatcherEvent_1.default(eventName);
                        this.events[eventName] = event;
                    }
                    event.registerCallback(callback);
                }
                off(eventName, callback = null) {
                    const event = this.events[eventName];
                    if (event && !callback) {
                        event.clearCallbacks();
                        delete this.events[eventName];
                    }
                    else if (event && event.callbacks.indexOf(callback) > -1) {
                        event.unregisterCallback(callback);
                        if (event.callbacks.length === 0) {
                            delete this.events[eventName];
                        }
                    }
                }
            };
            exports_1("default", Dispatcher);
        }
    };
});
//# sourceMappingURL=Dispatcher.js.map