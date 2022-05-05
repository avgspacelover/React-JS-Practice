import {useState} from 'react';


// Using value once-> useref | using value multiple times for every keystroke + reset value-> use state


const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');

  const [enteredNameTouched, setEnteredNameTouched] =useState(false)

  const enteredNameIsValid = enteredName.trim() !== '';

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    
    setEnteredName(event.target.value);

  }

  const nameInputBlurHandler = ()=> {
    setEnteredNameTouched(true);
  }

  const formSubmissionHandler =event => {
    event.preventDefault();

    setEnteredNameTouched(true);
    if(!enteredNameIsValid){

      return;
    }



    setEnteredNameTouched(false);
    setEnteredName('');
   
  }

  const nameInputCLasses = nameInputIsInvalid? 'form-control invalid': 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputCLasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName}onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
        {nameInputIsInvalid && <p className={'error-text'}>NAME MUST NOT BE EMPTY</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
