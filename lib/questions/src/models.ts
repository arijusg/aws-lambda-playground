export interface IHeaders {
  'Content-Type': string;
}

export interface IResponsePayload {
  statusCode: string;
  body: any;
  headers: IHeaders;
}

export interface IQueryParameters {
  foo: string;
}

export interface IEventPayload {
  httpMethod: string;
  queryStringParameters: IQueryParameters;
}

export interface ICallback {
  (error: any, result: IResponsePayload): void;
}

export class Answer {
    title: string;
}

export class Question  {
    id: number;
    title: string;
    category: string;
    answers: Array<Answer>;
}