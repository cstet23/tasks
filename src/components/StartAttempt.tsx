import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setInProgress(!inProgress);
        setAttempts(attempts - 1);
    }

    function stopQuiz(): void {
        setInProgress(!inProgress);
    }

    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            Attemps: <span>{attempts}</span>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={inProgress || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopQuiz} disabled={!inProgress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={mulligan} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
