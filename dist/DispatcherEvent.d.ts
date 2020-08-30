export default class DispatcherEvent {
    eventName: string;
    callbacks: any;
    constructor(eventName: string, data?: any);
    clearCallbacks(): void;
    registerCallback(callback: (data?: any) => void): void;
    unregisterCallback(callback: (data?: any) => void): void;
    fire(data: any): void;
}
