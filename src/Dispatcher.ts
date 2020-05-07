
import DispatcherEvent from './DispatcherEvent';

/**
 *
 */
export default class Dispatcher
{

    /**
     * Events
     *
     * @type {any}
     */
    events: any;

    /**
     * Test
     *
     * @return {string} [description]
     */
    public static test(): string
    {
        return 'foo';
    }

    /**
     * Constructor
     */
    constructor() {
        this.events = {};
    }

    /**
     * Dispatch
     *
     * @param {string} eventName [description]
     * @param {any =         {}}        data [description]
     */
    dispatch(eventName: string, data: any = {}) {
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
    on(eventName: string, callback: (data?: any) => void) {
        let event = this.events[eventName];

        if (!event) {
            event = new DispatcherEvent(eventName);
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
    off(eventName: string, callback: (data?: any) => void) {
        const event = this.events[eventName];

        if (event && event.callbacks.indexOf(callback) > -1) {
            event.unregisterCallback(callback);
            if (event.callbacks.length === 0) {
                delete this.events[eventName];
            }
        }
    }

}
