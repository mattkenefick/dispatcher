"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DispatcherEvent_1 = require("./DispatcherEvent");
class Dispatcher {
    constructor() {
        this.events = {};
    }
    static test() {
        return 'foo';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1REFBZ0Q7QUFLaEQsTUFBcUIsVUFBVTtJQXVCM0I7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBVk0sTUFBTSxDQUFDLElBQUk7UUFFZCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBZUQsUUFBUSxDQUFDLFNBQWlCLEVBQUUsT0FBWSxFQUFFO1FBQ3RDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFckMsSUFBSSxLQUFLLEVBQUU7WUFDUCxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNQLElBQUksRUFBRSxJQUFJO2dCQUNWLEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUsU0FBUztpQkFDbEI7Z0JBQ0QsTUFBTSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFRRCxFQUFFLENBQUMsU0FBaUIsRUFBRSxRQUE4QjtRQUNoRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixLQUFLLEdBQUcsSUFBSSx5QkFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ2xDO1FBRUQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFRRCxHQUFHLENBQUMsU0FBaUIsRUFBRSxRQUE4QjtRQUNqRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2pELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0o7SUFDTCxDQUFDO0NBRUo7QUFqRkQsNkJBaUZDIn0=