import { Question, Answer } from '../src/models';

export class TestData {

    public Question1: Question;
    public Question2: Question;

    constructor() {

        this.compose();
    };

    private compose() {

        var Question1Answer1: Answer = {
            title: "Question1Answer1"
        };

        var Question1Answer2: Answer = {
            title: "Question1Answer2"
        };

        this.Question1 = {
            id: 1,
            title: "What is your age?",
            category: "about",
            answers: [Question1Answer1, Question1Answer2]
        };

        var Question2Answer2: Answer = {
            title: "Question2Answer1"
        };
        
        this.Question2 = {
            id: 2,
            title: "What is your sex?",
            category: "about",
            answers: [
                Question2Answer2
            ]
        };


    }
}