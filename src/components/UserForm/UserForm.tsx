import { FormWrapper } from "../FormWrapper/FormWrapper"

type UserFormProps = {
  firstName: string
  lastName: string
  age: string
  updateFields: (fields: any) => void
}
export const UserForm = ({ firstName, lastName, age, updateFields }: UserFormProps) => {

  
  return (
    <FormWrapper title="User Details">    
      <label>First Name</label>
      <input autoFocus required type="text" value={firstName} onChange={e => updateFields({ firstName: e.target.value })} />
      <label htmlFor="">Last Name</label>
      <input type="text" required  value={lastName} onChange={e => updateFields({ lastName: e.target.value })}/>
      <label htmlFor="">Age</label>
      <input required min={1} type="number" value={age} onChange={e => updateFields({ age: e.target.value })} />
    </FormWrapper>
  )
}
