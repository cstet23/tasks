import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<number>(0);

    function useAttempt(): void {
        setAttempts(attempts - 1);
    }
    function giveAttempts({ requested }: { requested: number }): void {
        setAttempts(attempts + requested);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Attempts: {attempts}</span>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Attempts Back:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequested(parseInt(event.target.value) || 0)
                    }
                ></Form.Control>
            </Form.Group>
            <Button onClick={() => useAttempt()} disabled={attempts <= 0}>
                Use
            </Button>
            <Button onClick={() => giveAttempts({ requested })}>Gain</Button>
        </div>
    );
}
