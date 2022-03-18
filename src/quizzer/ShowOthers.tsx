import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ShowOthersProps {
    setVisible: (newVis: boolean) => void;
    visible: boolean;
}

export function ShowOthers({
    setVisible,
    visible
}: ShowOthersProps): JSX.Element {
    return (
        <Button onClick={() => setVisible(!visible)}>
            {visible === true ? "Hide" : "Show"} Non-Quizzer Components
        </Button>
    );
}
