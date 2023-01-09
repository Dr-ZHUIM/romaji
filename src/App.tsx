import React, { useState, useRef, useCallback } from 'react';
import { toKatakana, toRomaji, toHiragana } from 'wanakana';
import Translator from './components/Translator/Translator';
import "./assets/styles/index.css"

type Mode = "romaji" | "katagana" | "hiragana" | ""

function App() {

  const [mode, setMode] = useState<Mode>("");
  const [answer, setAnswer] = useState("");

  const JpRef = useRef("メンカタカラメヤサイダブルニンニクアブラマシマシ");

  const handleMode = (e: React.MouseEvent<HTMLInputElement, any>) => {
    const mode = e.currentTarget.dataset.mode as Mode;
    setMode(mode);
  }

  const handleSubmit = useCallback(() => {
    switch (mode) {
      case "hiragana":
        console.log('JpRef.current', JpRef.current)
        console.log(toHiragana(JpRef.current))
        setAnswer(toHiragana(JpRef.current))
        break;
      case "katagana":
        console.log('JpRef.current', JpRef.current)
        console.log(toKatakana(JpRef.current))
        setAnswer(toKatakana(JpRef.current))
        break;
      case "romaji":
        console.log('JpRef.current', JpRef.current)
        console.log(toRomaji(JpRef.current))
        setAnswer(toRomaji(JpRef.current))
        break;
      default:
        break;
    }
  }, [mode, JpRef.current])

  return (
    <div className="App">
      <div className='flex-row'>
        <div>
          <Translator title="日本语" ref={JpRef} />
        </div>
        <div>
          <div>
            <input onClick={handleMode} data-mode="romaji" type="radio" name="mode" id="q1" />
            <span>转罗马音</span>
            <input onClick={handleMode} data-mode="katagana" type="radio" name="mode" id="q2" />
            <span>转片假名</span>
            <input onClick={handleMode} data-mode="hiragana" type="radio" name="mode" id="q3" />
            <span>转平假名</span>
          </div>
          <div>
            <button onClick={handleSubmit}>转变!!!!</button>
          </div>
        </div>

        <textarea style={{ fontSize: "24px", fontFamily: "Int" }} disabled value={answer} cols={70} rows={40}></textarea>
      </div>
    </div>
  )
}

export default App
