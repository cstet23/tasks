import React from "react";
import { Stack } from "react-bootstrap";
import { Quiz } from "../interfaces/Quiz";
import { QuizView } from "./QuizView";

export function QuizList({ quizzes }: { quizzes: Quiz[] }): JSX.Element {
    return (
        <Stack gap={3}>
            {quizzes.map((quiz: Quiz) => (
                <div key={quiz.title}>
                    <QuizView quiz={quiz}></QuizView>
                </div>
            ))}
        </Stack>
    );
}
