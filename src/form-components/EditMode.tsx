import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateIsStudent(): void {
        setIsStudent(!isStudent);
    }
    function updateInEditMode(): void {
        setInEditMode(!inEditMode);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            {inEditMode ? (
                <div>
                    <Form.Group controlId="formPersonName">
                        <Form.Label>Your Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Check
                        type="switch"
                        id="is-student-switch"
                        label="Student"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                </div>
            ) : (
                <div>
                    {isStudent ? (
                        <span>{name} is a student</span>
                    ) : (
                        <span>{name} is not a student</span>
                    )}
                </div>
            )}
            <Form.Check
                type="switch"
                id="in-edit-mode-switch"
                label="Edit Mode"
                checked={inEditMode}
                onChange={updateInEditMode}
            />
        </div>
    );
}
