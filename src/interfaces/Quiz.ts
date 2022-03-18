import { QuizzerQuestion } from "./QuizzerQuestion";

export interface Quiz {
    title: string;
    description: string;
    questionCount: number;
    pointCount: number;
    questions: QuizzerQuestion[];
}
