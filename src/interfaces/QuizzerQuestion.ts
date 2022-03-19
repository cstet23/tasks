export interface QuizzerQuestion {
    id: number;
    name: string;
    body: string;
    type: string;
    options: string[];
    expected: string;
    points: number;
    published: boolean;
}
