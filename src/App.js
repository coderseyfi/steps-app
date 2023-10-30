import { useState } from 'react'
import close from './close.svg'

const messages = [
  'First of all you can do this 🫵',
  'Learn react and do well ⚛️',
  'Apply jobs 🤖',
]

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  )
}

function Steps() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
  //dont write state with manually for example with let use react features give us

  function handlePrevios() {
    if (step > 1) setStep((s) => s - 1)
  }

  function handleNext() {
    if (step < messages.length) {
      setStep((s) => s + 1)
    }
  }

  return (
    <div>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className="message">
            Step : {step} {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevios}>
              Previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}>
              Next
            </button>
          </div>

          <div onClick={() => setIsOpen((is) => false)} className="close">
            <img src={close} alt="" />
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen((is) => true)} className="open">
          Steps 😈
        </button>

        //state i update etdiyin zaman callback cagir
      )}
    </div>
  )
}
