import React, { useState } from 'react';
import Button from './components/Button';
import SelectBox from './components/SelectBox';
import TextBox from './components/TextBox';
import SimpleSlider from './components/Carousel';
import './styles.scss';
import { postGenerateTextEndpoint } from './utils';

function App() {
  const [text, setText] = useState("");
  const [model, setModel] = useState('gpt2');
  const [generatedText, postGenerateText] = postGenerateTextEndpoint();

  const generateText = () => {
    postGenerateText({ text, model, userId: 1 });
  }

  let audio = new Audio("./Music.mp3")

  const start = () => {
    audio.play()
  }

  start();
  return (
    <div className='app-container'>
      <form noValidate autoComplete='off'>
        <h1 className='mainTitle'>The Lovecraftian horror generator</h1>
        <SimpleSlider/>
        <TextBox text={text} setText={setText} />
        <Button onClick={generateText} />
      </form>

      {generatedText.pending &&
        <div className='result pending' style={{color:'black'}}>Please wait</div>}

      {generatedText.complete &&
        (generatedText.error ?
          <div className='result error' style={{color:'black'}}>Bad Request</div> :
          <div className='result valid' style={{color:'black'}}>
            {generatedText.data.result}
          </div>)}
      <h4 style={{textAlign:'center',paddingTop:'30px'}}>Developed and trained with ♥ by Juan Carlos Garfias Tovar</h4>
    </div>
  );
}

export default App;
