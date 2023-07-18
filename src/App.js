import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import GetFortune from "./Fortune-Component";
import State, { useState } from "react";

export default function App() {
  const [fortune, setFortune] = useState("");
  return (
    <div className="App">
      <br />
      <h1 style={{ fontSize: "50px" }}>Free Advice Page</h1>
      <h2>Let the Games Begin!!!</h2>
      <div className="Wonka">
        <img
          alt="fotuneTeller"
          src="https://i.pinimg.com/originals/d4/26/97/d42697231f5f6d5a79f23d194f7b21d3.gif"
        />
      </div>
      <h3>Click Below:</h3>
      <Button onClick={() => setFortune(GetFortune())} variant="warning">
        BEHOLD...
      </Button>
      <br />
      <br />
      {fortune && <div>{fortune}</div>}
      <br />
      <br />
    </div>
  );
}
