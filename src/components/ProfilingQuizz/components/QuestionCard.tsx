interface QuestionCardProps {
  stepIndex: number
  title: string 
  answers: []
  onNext: (stepIndex:number, title:string, answer: string) => void
}

export const QuestionCard = ({ stepIndex, title, answers, onNext }: QuestionCardProps) => {

  const onOptionChange = e => {
    const answer = e.target.value;
    onNext(stepIndex, title, answer)
  }
  
  return (<>  
    <div
    style={{ border: '1px solid black'}}
    >
      <h3>{title}</h3>
      {answers?.map((item, index) => (        
        <div key={index}>                    
          <input 
            type="radio" 
            value={item.answer}
            name={`radio-item_${stepIndex}`}
            id={`default_answer${stepIndex}_${index}`}             
            onChange={onOptionChange} 
            />            
          <label htmlFor={`default_answer${stepIndex}_${index}`}>{item.answer}</label>                    
        </div>
      ))}
    </div>
    </>)
}
