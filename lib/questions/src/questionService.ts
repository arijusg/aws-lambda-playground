import { TestData } from '../test/testData';

//TODO: Implement Database
export class QuestionService {
    public GetAll(): any {
        let data = new TestData();

        return [data.Question1, data.Question2];
    }
}