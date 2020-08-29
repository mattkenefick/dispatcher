System.register(["./Dispatcher", "./DispatcherEvent"], function (exports_1, context_1) {
    "use strict";
    var Dispatcher_1, DispatcherEvent_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Dispatcher_1_1) {
                Dispatcher_1 = Dispatcher_1_1;
            },
            function (DispatcherEvent_1_1) {
                DispatcherEvent_1 = DispatcherEvent_1_1;
            }
        ],
        execute: function () {
            exports_1("Dispatcher", Dispatcher_1.default);
            exports_1("DispatcherEvent", DispatcherEvent_1.default);
        }
    };
});
//# sourceMappingURL=index.js.map