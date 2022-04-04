import React, { useState } from "react";
import { Form, Stack } from "react-bootstrap";
import { Quiz } from "../interfaces/Quiz";
import { QuizView } from "./QuizView";

export function QuizList({ quizzes }: { quizzes: Quiz[] }): JSX.Element {
    const [selected, setSelected] = useState<string>("cool quiz 1");

    function changeSelected(event: React.ChangeEvent<HTMLInputElement>) {
        setSelected(event.target.value);
    }

    return (
        <Stack gap={3}>
            {quizzes.map((quiz: Quiz) => (
                <div key={quiz.title}>
                    <Form.Check
                        key={quiz.title}
                        type="radio"
                        name="quizzes"
                        onChange={changeSelected}
                        id={quiz.title}
                        label=""
                        value={quiz.title}
                        checked={selected === quiz.title}
                    />
                    <QuizView quiz={quiz} selected={selected}></QuizView>
                </div>
            ))}
        </Stack>
    );
}
