import { ICallback, IEventPayload} from './models';

export function getQuestions(event: IEventPayload, context, callback: ICallback) {  
  callback(undefined, { 
    message: `Method: ${event.method}, Param: ${event.query.foo}`, 
    event: event 
  });
}