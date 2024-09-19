import { FormWrapper } from "../FormWrapper/FormWrapper"

export const AddressForm = () => {
  return (<FormWrapper title="Address">    
    <label htmlFor="">Address</label>
    <input type="text" autoFocus required />
    </FormWrapper>)
}
