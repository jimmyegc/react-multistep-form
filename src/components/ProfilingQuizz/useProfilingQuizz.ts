import { useState } from "react";
import { quizzMock as steps } from "./QuizzMock";

export const useProfilingQuizz = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [data, setData] = useState(steps)

  const next = (index, question, answer) => {    
    console.log("index", index)
    console.log("question", question)
    console.log("answer", answer)

    const newArray = [...data]
    newArray[index] = { orden: index+1, question, answer }    
    setData(newArray)
    
    setCurrentStepIndex(i => {
      if(i>=steps.length-1) return i
      //console.log("...", i+1)
      return i + 1
    })
  }

  const back = () => {
    setCurrentStepIndex(i => {
      if(i<=0) return i
      return i - 1
    })
  }

  const goTo = (index:number) => {
    setCurrentStepIndex(index)
  }
    

  return {
    currentStepIndex,
    step: steps[currentStepIndex],    
    stepsFilter: steps.filter((_,index) => index <= currentStepIndex),
    //questions: steps,
    data,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length-1,
    goTo,
    next,
    back
  }

}