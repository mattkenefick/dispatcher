'use strict';

var expect = require('chai').expect;
import { Dispatcher } from '../index';

/**
 * Tests
 */
describe('Dispatcher Tests', () => {

    it('should return `foo`', () => {
        var result = Dispatcher.test();

        expect(result).to.equal('foo');
    });

    it('should dispatch event', () => {
        var instance = new Dispatcher;

        instance.on('myEvent', (e: any) => {
            expect('bar').to.equal('bar');
        });

        instance.dispatch('myEvent');
    });

    it('should have data property', () => {
        var instance = new Dispatcher;

        instance.on('myEvent', (e: any) => {
            expect(e).to.have.a.property('data');
        });

        instance.dispatch('myEvent');
    });

    it('should have event property', () => {
        var instance = new Dispatcher;

        instance.on('myEvent', (e: any) => {
            expect(e).to.have.a.property('event');
        });

        instance.dispatch('myEvent');
    });

    it('should have target property', () => {
        var instance = new Dispatcher;

        instance.on('myEvent', (e: any) => {
            expect(e).to.have.a.property('target');
        });

        instance.dispatch('myEvent');
    });

    it('should have myEvent name', () => {
        var instance = new Dispatcher;

        instance.on('myEvent', (e: any) => {
            expect(e.event.name).to.equal('myEvent');
        });

        instance.dispatch('myEvent');
    });

    it('should be a Dispatcher instance', () => {
        var instance = new Dispatcher;

        instance.on('myEvent', (e: any) => {
            expect(e.target).to.be.an.instanceof(Dispatcher);
        });

        instance.dispatch('myEvent');
    });

});