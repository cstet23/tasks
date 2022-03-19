import React from "react";
import { Quiz } from "../interfaces/Quiz";
import { QuizList } from "./QuizList";

export function Quizzer({ quizzes }: { quizzes: Quiz[] }): JSX.Element {
    return (
        <div>
            <h3>Quizzer</h3>
            <QuizList quizzes={quizzes}></QuizList>
        </div>
    );
}
