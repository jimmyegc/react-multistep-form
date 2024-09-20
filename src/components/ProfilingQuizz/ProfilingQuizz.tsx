import { QuestionCard } from "./components/QuestionCard"
import { useProfilingQuizz } from "./useProfilingQuizz"

export const ProfilingQuizz = () => {
  
  const { data, stepsFilter, next, goTo, currentStepIndex } = useProfilingQuizz()


  return (<>
    <div>ProfilingQuizz</div>       
    {stepsFilter?.map((question, index) =>  (
      index <= currentStepIndex && (
        <QuestionCard         
          key={index}
          stepIndex={index}
          title={question.name}
          answers={question.answers}
          onNext={next}
      />
      )      
    ))}
     <pre>
    {JSON.stringify(data, null, 2)}
    </pre>
    {/* 
   
    {JSON.stringify(stepsFilter, null, 2)}
    </pre>
    <pre>
      {JSON.stringify(steps, null, 2)}
    </pre> */}
    </>
  )
}
