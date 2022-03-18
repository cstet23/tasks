export interface QuizzerQuestion {
    type: string;
    title: string;
    answers: string | string[];
    correct: string;
    published: boolean;
}
