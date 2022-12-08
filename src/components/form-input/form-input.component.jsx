import { FormInputContainer } from "./form-input.styles";

const FormInput = ({ label,...otherProps}) => {
    // console.log(otherProps)
  return (
      <FormInputContainer >
          <input className='form-input' {...otherProps}/>
        {label&& (      
            <label className={`${otherProps.value.length?'shrink':'form-input-label'}`}>{label}</label>
        )
    }
    </FormInputContainer>
  );
};

export default FormInput