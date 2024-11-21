import { useState } from "react";

const messages = [
  "Learn React",
  "Apply for job ",
  "Invest your new income"
];

export default function App() {

  const [step, setStep] = useState(1);
  const [isOpen, SetOpen] = useState(true);

  function handlePrevious() {
    if (step > 1)
      setStep(step - 1);
  }

  function handleNext() {
    if (step < 3)
      setStep(step + 1);
  }

  return (
    <>
      <button className="close" onClick={()=>SetOpen(!isOpen)} >&times;</button>
      {isOpen && (
       <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <br></br>
        <p className="messagge" >Step {step}: {messages[step - 1]}</p>
        <br></br>
        <div className="buttons">
          <buttons onClick={handlePrevious} style={{ cursor: 'pointer', padding: '10px 20px', backgroundColor: '#7950f2', color: '#fff' }}>Previous</buttons>
          <buttons onClick={handleNext} style={{ cursor: 'pointer', padding: '10px 20px', backgroundColor: '#7950f2', color: '#fff' }}>Next</buttons>
        </div>
      </div>
      )}
    </>
  );
}