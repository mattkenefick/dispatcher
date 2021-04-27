
import { expect } from 'chai';
import {
    Dispatcher,
    DispatcherEvent,
} from '../src/index';

/**
 * Tests Dispatcher
 */
describe('Basic Tests', () => {

    it('should receive a basic event', function(done) {
        const instance: Dispatcher = new Dispatcher;

        // Test event
        instance.on('foo', () => {
            expect(true).to.equal(true);
            done();
        });

        instance.trigger('foo');
    });

    it('should receive an event with data', function(done) {
        const instance: Dispatcher = new Dispatcher;

        // Test event
        instance.on('foo', (e) => {
            expect(e.event.name).to.equal('foo');
            expect(e.data.name).to.equal('Matt');
            expect(e.data.name).to.not.equal('Anything Else');
            done();
        });

        instance.trigger('foo', {
            name: 'Matt',
        });
    });

});