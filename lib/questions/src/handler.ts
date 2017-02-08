import { ICallback, IEventPayload } from './models';


import { TestData } from '../test/testData';

class QuestionsLoader {
  public Load(): any {
    let data = new TestData();

    return [data.Question1, data.Question2];
  }
}

export function questions(event: IEventPayload, context, callback: ICallback) {

  const done = (err, res) => callback(null, {
    statusCode: err ? '400' : '200',
    body: err ? err.message : JSON.stringify(res),
    headers: { 'Content-Type': 'application/json' }
  });

  let body = `Method: ${event.httpMethod}, Param: ${event.queryStringParameters.foo}`;
  let message = body;

  if (event.httpMethod === 'GET') {
    let loader = new QuestionsLoader();
    let questions = loader.Load();
    done(undefined, questions);
  }
  else
    done(new Error(`Unsupported method "${event.httpMethod}"`), undefined);
}