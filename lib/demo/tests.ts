import * as chai from 'chai';  
import * as mocha from 'mocha';

const expect = chai.expect;

import * as handler from './src/handler';  


describe('hello function', () => {  
  it('processes the query string', done => {
    const requestEvent = {
      httpMethod: 'GET',
      queryStringParameters: {
          foo: 'bar'
      }
    };

    handler.hello(requestEvent, {}, (err, result) => {
      expect(err).to.be.undefined;
      expect(result.event).to.equal(requestEvent);
      expect(result.message).to.equal('Method: GET, Param: bar');

      done();
    });
  });
});