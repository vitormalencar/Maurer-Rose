import React, { useState } from 'react'
import Sketch from 'react-p5'

import './App.css'

const drawRoutine = (p5, n, d, setD, setN, slide) => {
  d = slide

  p5.background(0)
    .translate(400 / 2, 400 / 2)
    .noFill()
    .stroke(255, 0, 255, 255)
    .strokeWeight(2)
    .beginShape()

  for (let index = 0; index < 361; index++) {
    let k = index * d
    let r = 150 * Math.sin(n * k)
    let x = r * Math.cos(k)
    let y = r * Math.sin(k)
    p5.vertex(x, y)
  }

  p5.endShape()

  setD((d += 0.0001))
  setN((n += 0.0003))
}

function App() {
  const [n, setN] = useState(0)
  const [d, setD] = useState(0)
  const [slide, setSlide] = useState(0.1)
  const setup = (p5, parent) => p5.createCanvas(400, 400).parent(parent)
  const draw = p5 => drawRoutine(p5, n, d, setD, setN, slide)

  return (
    <div className="App">
      <h1>Maurer Rose</h1>
      <Sketch setup={setup} draw={draw} />
      <input
        max={1}
        min={0.1}
        step={0.1}
        type="range"
        value={slide}
        onChange={e => setSlide(e.target.value)}
      />
    </div>
  )
}

export default App
