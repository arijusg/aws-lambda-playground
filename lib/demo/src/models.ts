export interface IResponsePayload {  
  message: string;
  event: any;
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