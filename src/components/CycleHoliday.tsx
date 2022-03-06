import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🦃" | "🎃" | "🌊" | "🎉";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    const ALPH_CYCLE: Record<Holiday, Holiday> = {
        "🎄": "🎃",
        "🎃": "🎉",
        "🎉": "🌊",
        "🌊": "🦃",
        "🦃": "🎄"
    };

    const CHRONO_CYCLE: Record<Holiday, Holiday> = {
        "🌊": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🎉",
        "🎉": "🌊"
    };

    function changeHolidayAlph(): void {
        const newHoliday = ALPH_CYCLE[holiday];
        setHoliday(newHoliday);
    }

    function changeHolidayChrono(): void {
        const newHoliday = CHRONO_CYCLE[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={changeHolidayAlph}>Advance Alphabetically</Button>
            <Button onClick={changeHolidayChrono}>
                Advance by Time of Year
            </Button>
        </div>
    );
}
