import React, { useState } from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";
import { Quizzer } from "./quizzer/Quizzer";
import { ShowOthers } from "./quizzer/ShowOthers";
import sketch1 from "./assets/quizzersketchp1.jpg";
import sketch2 from "./assets/quizzersketchp2.jpg";
import quizzes from "./data/Quizzes.json";
import { Quiz } from "./interfaces/Quiz";

const QUIZZES = quizzes.map((quiz): Quiz => ({ ...quiz }));

function App(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(true);
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "#6301F4" }}
            >
                CISC275
            </header>
            <Quizzer quizzes={QUIZZES}></Quizzer>
            <hr></hr>
            <ShowOthers setVisible={setVisible} visible={visible}></ShowOthers>
            <hr></hr>
            {visible && (
                <div>
                    <CheckAnswer expectedAnswer="42"></CheckAnswer>
                    <hr></hr>
                    <GiveAttempts></GiveAttempts>
                    <hr></hr>
                    <EditMode></EditMode>
                    <hr></hr>
                    <ChangeColor></ChangeColor>
                    <hr></hr>
                    <MultipleChoiceQuestion
                        options={["a", "b", "c"]}
                        expectedAnswer="b"
                    ></MultipleChoiceQuestion>
                    <hr></hr>
                    <DoubleHalf></DoubleHalf>
                    <hr></hr>
                    <ChooseTeam></ChooseTeam>
                    <hr></hr>
                    <ColoredBox></ColoredBox>
                    <hr></hr>
                    <ShoveBox></ShoveBox>
                    <hr></hr>
                    <Counter></Counter>
                    <hr />
                    <RevealAnswer></RevealAnswer>
                    <hr />
                    <StartAttempt></StartAttempt>
                    <hr />
                    <TwoDice></TwoDice>
                    <hr />
                    <ChangeType></ChangeType>
                    <hr />
                    <CycleHoliday></CycleHoliday>
                </div>
            )}
            <div>
                <h3>Sketches</h3>
                <img
                    src={sketch1}
                    alt="Quizzer sketch, main view and opened quiz view"
                />
            </div>
            <div>
                <img src={sketch2} alt="Quizzer sketch, edit quiz view" />
            </div>
            <hr></hr>
            <div>
                <h3>Completed Requirements:</h3>
                <ul>
                    <li>none yet :(</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
