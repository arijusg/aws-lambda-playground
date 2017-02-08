import { ICallback, IEventPayload } from './models';
import { QuestionService } from './questionService';

export function questions(event: IEventPayload, context, callback: ICallback) {

  const done = (err, res) => callback(null, {
    statusCode: err ? '400' : '200',
    body: err ? err.message : JSON.stringify(res),
    headers: { 'Content-Type': 'application/json' }
  });

  if (event.httpMethod === 'GET') {
    let questionService = new QuestionService();

    let questions = questionService.GetAll();
    done(undefined, questions);
  }
  else
    done(new Error(`Unsupported method "${event.httpMethod}"`), undefined);
}