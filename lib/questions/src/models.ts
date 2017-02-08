export interface IHeaders {
  'Content-Type': string;
}

export interface IResponsePayload {
  //message: string;
  //event: any;
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