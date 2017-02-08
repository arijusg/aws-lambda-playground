import * as chai from 'chai';
import * as mocha from 'mocha';

const expect = chai.expect;

import * as handler from '../src/handler';
import * as models from '../src/models';


describe('hello function', () => {
  it('processes the query string', done => {

    var request: models.IEventPayload;
    request = {
      httpMethod: 'GET',
      queryStringParameters: {
        foo: 'bar'
      }
    }

    handler.hello(request, {}, (err, result) => {
      expect(err).to.be.null;
      expect(result.statusCode).to.be.equal('200');
      expect(result.headers).to.be.deep.equal({ 'Content-Type': 'application/json' });
      expect(result.body).to.be.equal('"Method: GET, Param: bar"');


      done();
    });
  });


  it('should return error on not supported httpMethod', done => {

    var request: models.IEventPayload;
    request = {
      httpMethod: 'POST',
      queryStringParameters: {
        foo: 'Irrelevant'
      }
    }

    handler.hello(request, {}, (err, result) => {
      expect(err).to.be.null;
      expect(result.statusCode).to.be.equal('400');
      expect(result.headers).to.be.deep.equal({ 'Content-Type': 'application/json' });
      expect(result.body).to.be.equal('Unsupported method "POST"');

      done();
    });
  });

});