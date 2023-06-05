import { useState } from "react";
import { Container, Stack, } from "react-bootstrap";

import InputImage from "./InputImage";
import Output from "./Output";

function App() {
  const [outputs, setOutputs] = useState([]);
  const [imageToPredict, setImageToPredict] = useState("");

  return (
    <div>
      <Container>
        <div className="mt-3" />
        <Stack gap={2}>
          <InputImage setOutputs={setOutputs}
          setImageToPredict={setImageToPredict} />
          <Output outputs={outputs} imageToPredict={imageToPredict} />
        </Stack>
      </Container>
    </div>
  );
}

export default App;
