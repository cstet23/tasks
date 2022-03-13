import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [matching, setMatching] = useState<boolean>(false);

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
        if (event.target.value === expectedAnswer) {
            setMatching(true);
        } else {
            setMatching(false);
        }
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={answer}
                    onChange={updateAnswer}
                ></Form.Control>
            </Form.Group>
            <span>{matching === true ? "✔️" : "❌"}</span>
        </div>
    );
}
