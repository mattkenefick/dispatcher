/**
 *
 */
export default class Dispatcher {
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
    static test(): string;
    /**
     * Constructor
     */
    constructor();
    /**
     * Dispatch
     *
     * @param {string} eventName [description]
     * @param {any =         {}}        data [description]
     */
    dispatch(eventName: string, data?: any): void;
    /**
     * On
     *
     * @param {string}  eventName [description]
     * @param {any) =>        void}        callback [description]
     */
    on(eventName: string, callback: (data?: any) => void): void;
    /**
     * Off
     *
     * @param {string}  eventName [description]
     * @param {any) =>        void}        callback [description]
     */
    off(eventName: string, callback: (data?: any) => void): void;
}
