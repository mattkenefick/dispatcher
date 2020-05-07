
/**
 *
 */
export default class DispatcherEvent
{

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
    constructor(eventName: string, data: any = {}) {
        // super(eventName, data);

        this.eventName = eventName;
        this.callbacks = [];
    }

    /**
     * Register Callback
     *
     * @param {any) => void} callback [description]
     */
    registerCallback(callback: (data?: any) => void) {
        this.callbacks.push(callback);
    }

    /**
     * Unregister Callback
     *
     * @param {any) => void} callback [description]
     */
    unregisterCallback(callback: (data?: any) => void) {
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
    fire(data: any) {
        const callbacks = this.callbacks.slice(0);
        callbacks.forEach((callback: (data?: any) => void) => {
            callback(data);
        });
    }

}
