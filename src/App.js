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

          {/* bu componentin ichine yazilan childrendir qebul edende props.children */}
          <StepMessage step={step}>
            Step : {step} {messages[step - 1]}
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevios}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>

          <div onClick={() => setIsOpen((is) => false)} className="close">
            <img src={close} alt="close" />
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

function StepMessage({ step, children }) {
  return <p className="message">{children}</p>
}
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}>
      {children}
    </button>
  )
}
