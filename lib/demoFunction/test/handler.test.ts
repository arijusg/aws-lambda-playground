import * as mocha from 'mocha';
import * as chai from 'chai';

import { hello } from '../src/handler';

const expect = chai.expect;


describe('helloTest', () => {
    it('processes the query string', done => {
        const requestEvent = {
            method: 'GET',
            query: {
                foo: 'bar'
            }
        };

        hello(requestEvent, {}, (err, result) => {
            expect(err).to.be.undefined;
            expect(result.event).to.equal(requestEvent);
            expect(result.message).to.equal('Method: GET, Param: bar');

            done();
        });
    });

});