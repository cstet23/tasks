import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "#6301F4" }}
            >
                CISC275
            </header>
            <h2>Another one</h2>
            <p>Colin Stetler Hello World</p>
            <Container>
                <Row>
                    <Col>
                        <img
                            src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F488%2F877%2F20a.jpg"
                            alt="cha cha real smooth"
                            width="100%"
                            height="75%"
                        />
                        <div
                            style={{
                                height: "25%",
                                width: "100%",
                                backgroundColor: "#FF0000"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "25%",
                                width: "100%",
                                backgroundColor: "#FF0000"
                            }}
                        ></div>
                        <div style={{ textAlign: "left" }}>
                            <ul>
                                <li>when you</li>
                                <li>when you</li>
                                <li>when you</li>
                                <li>when you</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div style={{ padding: "12px" }}>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
        </div>
    );
}

export default App;
