import { ICallback, IEventPayload } from './models';

export function hello(event: IEventPayload, context, callback: ICallback) {

  const done = (err, res) => callback(null, {
    statusCode: err ? '400' : '200',
    body: err ? err.message : JSON.stringify(res),
    headers: { 'Content-Type': 'application/json' }
  });

  let body = `Method: ${event.httpMethod}, Param: ${event.queryStringParameters.foo}`;
  let message = body;

  if (event.httpMethod === 'GET')
    done(undefined, body);
  else
    done(new Error(`Unsupported method "${event.httpMethod}"`), undefined);
}