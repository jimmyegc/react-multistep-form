import { FormWrapper } from "../FormWrapper/FormWrapper"

export const AccountForm = () => {
  return (<FormWrapper title="Account">
    <div>AccountForm</div>
    <label htmlFor="">Email</label>
    <input type="email" autoFocus required />
    </FormWrapper>)
}
