import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/Quiz";
import { QuizzerQuestion } from "../interfaces/QuizzerQuestion";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function updateEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <span>editing</span>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{quiz.title}</h3>
                    <span>{quiz.description}</span>
                </Col>
                <Col>
                    <div>
                        <ul>
                            {quiz.questions.map((question: QuizzerQuestion) => (
                                <li key={question.id}>
                                    <div>{question.name}</div>
                                    <div>{question.body}</div>
                                    {/*question.type ===
                                    "multiple_choice_question" ? (
                                        <div>
                                            {question.options.map(
                                                (option: string) => (
                                                    <Form.Check
                                                        key={
                                                            question.name +
                                                            option
                                                        }
                                                        type="radio"
                                                        name={question.name}
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
                                        <div></div>
                                    )*/}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
