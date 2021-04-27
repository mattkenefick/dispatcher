export default class Dispatcher {
    events: any;
    constructor();
    trigger(eventName: string, data?: any): void;
    dispatch(eventName: string, data?: any): void;
    on(eventName: string, callback: (data?: any) => void): void;
    off(eventName: string, callback?: any): void;
}
