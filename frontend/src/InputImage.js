import React, { useState } from 'react';
import axios from "axios";

import { FormControl, Button } from "react-bootstrap";

export default function InputImage(props) {
  const { setOutputs, setImageToPredict } = props;
  const [imageUrl, setImageUrl] = useState("https://samples.clarifai.com/dog2.jpeg")
  
  const handleChangeImageUrl = (e) => {
    setImageUrl(e.target.value);
  }
  
  const predictImage = () => {
    setImageToPredict(imageUrl);
    axios.post('/predict', {
      imageUrl: imageUrl
    }).then((res) => {
      setOutputs(res.data.results);
    }).catch((err) => {
      alert(err);
    })
  }

    return (
    <div>
        <FormControl class="mb-3" value={imageUrl} placeholder="Image URL"
        aria-label="Image URL" onChange={handleChangeImageUrl} />
        <Button variant="primary" onClick={predictImage}>
            Submit
        </Button>
    </div>
  )
}
