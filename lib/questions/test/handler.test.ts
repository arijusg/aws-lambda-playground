import * as chai from 'chai';
import * as mocha from 'mocha';

const expect = chai.expect;

import * as handler from '../src/handler';
import * as models from '../src/models';
import { TestData } from './testData';

var testData = new TestData();

describe('questions function', () => {
  it('should return error on not supported httpMethod', done => {
    var request: models.IEventPayload;
    request = {
      httpMethod: 'POST',
      queryStringParameters: {
        foo: 'Irrelevant'
      }
    }

    handler.questions(request, {}, (err, result) => {
      expect(err).to.be.null;
      expect(result.statusCode).to.be.equal('400');
      expect(result.headers).to.be.deep.equal({ 'Content-Type': 'application/json' });
      expect(result.body).to.be.equal('Unsupported method "POST"');

      done();
    });
  });

  it('should return questions', done => {
    var request: models.IEventPayload;
    request = {
      httpMethod: 'GET',
      queryStringParameters: {
        foo: 'Irrelevant' //TODO
      }
    }

    handler.questions(request, {}, (err, result) => {
      expect(err).to.be.null;
      expect(result.statusCode).to.be.equal('200');
      expect(result.headers).to.be.deep.equal({ 'Content-Type': 'application/json' });

      var questions = <Array<models.Question>>JSON.parse(result.body);

      expect(questions).to.be.a('array');
      expect(questions).to.have.length.of('2');

      var question1 = questions.find(question => question.id === testData.Question1.id);
      expect(question1.id).to.be.equal(testData.Question1.id);
      expect(question1.title).to.be.equal(testData.Question1.title);
      expect(question1.category).to.be.equal(testData.Question1.category);

      var question2 = questions.find(question => question.id === testData.Question2.id);
      expect(question2.id).to.be.equal(testData.Question2.id);
      expect(question2.title).to.be.equal(testData.Question2.title);
      expect(question2.category).to.be.equal(testData.Question2.category);

      done();
    });
  });

});