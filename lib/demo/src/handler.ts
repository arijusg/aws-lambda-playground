import { ICallback, IEventPayload } from './models';

export function hello(event: IEventPayload, context, callback: ICallback) {

  let body = `Method: ${event.httpMethod}, Param: ${event.queryStringParameters.foo}`;
  let message = body;
  callback(undefined, {
    message: message,
    event: event
  });
}