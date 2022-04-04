import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/Quiz";
import { QuizzerQuestion } from "../interfaces/QuizzerQuestion";

export function QuizView({
    quiz,
    selected
}: {
    quiz: Quiz;
    selected: string;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function updateEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <span>editing</span>
    ) : (
        <Container>
            <Col>
                <Row>
                    <h3>{quiz.title}</h3>
                    <span>{quiz.description}</span>
                </Row>
                {selected === quiz.title && (
                    <Row>
                        <div>
                            <ul>
                                {quiz.questions.map(
                                    (question: QuizzerQuestion) => (
                                        <li key={question.id}>
                                            <div style={{ fontWeight: "bold" }}>
                                                {question.name}
                                            </div>
                                            <div>{question.body}</div>
                                            {question.type === "mc" ? (
                                                <div>
                                                    {question.options.map(
                                                        (option: string) => (
                                                            <Form.Check
                                                                key={
                                                                    question.name +
                                                                    option
                                                                }
                                                                type="radio"
                                                                name={
                                                                    question.name
                                                                }
                                                                id={
                                                                    question.name +
                                                                    option
                                                                }
                                                                label={option}
                                                                value={option}
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            ) : (
                                                <div>
                                                    <Form.Group>
                                                        <Form.Control />
                                                    </Form.Group>
                                                </div>
                                            )}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </Row>
                )}
            </Col>
            <Col>
                <Row>
                    <span>Points: {quiz.pointCount}</span>
                </Row>
            </Col>
            <hr></hr>
        </Container>
    );
}
