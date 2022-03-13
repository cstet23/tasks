import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { SemanticClassificationFormat } from "typescript";

const COLORS = [
    "crimson",
    "cyan",
    "teal",
    "orange",
    "deeppink",
    "maroon",
    "purple",
    "lime"
];

export function ChangeColor(): JSX.Element {
    const [theColor, setTheColor] = useState<string>("crimson");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setTheColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                The current color is:{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: theColor }}
                >
                    {theColor}
                </span>
            </div>
            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    type="radio"
                    inline
                    name="colors"
                    onChange={updateColor}
                    id={`colors-choice-${color}`}
                    label={
                        <span style={{ backgroundColor: color }}>{color}</span>
                    }
                    value={color}
                    checked={theColor === color}
                ></Form.Check>
            ))}
        </div>
    );
}
