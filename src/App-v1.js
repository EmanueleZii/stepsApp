import { Children, useState } from "react";

const messages = [
  "Learn React",
  "Apply for job ",
  "Invest your new income"
];

export default function App() {
 return(
 <div>
    <Steps />
    <StepMessagge step={1}>
      <p>Pass in content</p>
    </StepMessagge>
    <StepMessagge step={2}>
      <p>Read Children Props </p>
    </StepMessagge>
    <StepMessagge step={3}>
      <p>Read Documentation </p>
    </StepMessagge>
  </div>);
}

function Steps() {

  const [step, setStep] = useState(1);
  const [isOpen, SetOpen] = useState(true);

  function handlePrevious() {
    if (step > 1)
      setStep( (s) => s - 1 );
  }

  function handleNext() {
    if (step < 3)
      setStep((s)=> s + 1);
  }

  return (
    <>
      <button className="close" onClick={()=>SetOpen((is)=>!is)} >&times;</button>
      {isOpen && (
       <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <br></br>
        <StepMessagge step={step}>
          {messages[step-1]}
          <div className="button">
           <Button bgColor='#e7e7e7' textColor='#333' onClick={()=>alert(`Learn How to ${messages[step - 1]} `)}></Button> 
          </div>
        </StepMessagge>
        <br></br>
        <div className="buttons">
          <Button bgColor='#7950f2' textColor='#fff' onClick={handlePrevious} text='Previous' />
          <Button bgColor='#7950f2' textColor='#fff' onClick={handleNext} text='Next' />
        </div>
      </div>
      )}
    </>
  );
}

function Button(textColor, bgColor, onClick, text)
{
   return <button onClick={onClick} style={{ cursor: 'pointer', padding: '10px 20px', backgroundColor: bgColor, color: textColor }}>Text</button>
}


function StepMessagge({step, children}){
  return(
    <div className="messagge">
    <h3> Step {step}</h3> 
    {children}
  </div>
  );
}