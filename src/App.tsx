import { FormEvent, useState } from 'react'
import './App.css'
import { AccountForm } from './components/AccountForm/AccountForm'
import { AddressForm } from './components/AddressForm/AddressForm'
import { UserForm } from './components/UserForm/UserForm'
import { useMultistepForm } from './hooks/useMultistepForm'
import { ProfilingQuizz } from './components/ProfilingQuizz/ProfilingQuizz'

type FormData = {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  email: string,
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  street: "",
  email: ""
}

function App() {  
  const [data, setData] = useState(INITIAL_DATA)

  const updateFields = (fields: Partial<FormData>) => {
    setData(prev => {
      return {
        ...prev,
        ...fields
      }
    })
  }

  const { 
    steps,
    currentStepIndex,
    step,    
    isFirstStep,
    isLastStep,
    back,
    next
  } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />, <AddressForm {...data} />, <AccountForm {...data} />
  ])


  const onSubmit =(e: FormEvent) => {
    e.preventDefault()
    if(!isLastStep) return next()
    alert("Successful!")
  }

  return (
    <>
     <div style={{
        position: 'relative',
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content"
      }}>
        <form onSubmit={onSubmit}>
          <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>{currentStepIndex+1} / {steps.length}</div>          
          <div style={{ marginTop: "1rem", display: "flex", gap: ".5rem", justifyContent: "flex-end" }}>
            {!isFirstStep && <button type="button" onClick={back}>Back</button> }
            <button>
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
        {step}
      </div>
      {JSON.stringify(data)} 
      <ProfilingQuizz />
    </>
  )
}

export default App
