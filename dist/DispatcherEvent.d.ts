/**
 *
 */
export default class DispatcherEvent {
    /**
     * Event Name
     *
     * @type {string}
     */
    eventName: string;
    /**
     * Callbacks
     *
     * @type {any}
     */
    callbacks: any;
    /**
     * Constructor
     */
    constructor(eventName: string, data?: any);
    /**
     * Register Callback
     *
     * @param {any) => void} callback [description]
     */
    registerCallback(callback: (data?: any) => void): void;
    /**
     * Unregister Callback
     *
     * @param {any) => void} callback [description]
     */
    unregisterCallback(callback: (data?: any) => void): void;
    /**
     * Fire
     *
     * @param {any} data [description]
     */
    fire(data: any): void;
}
