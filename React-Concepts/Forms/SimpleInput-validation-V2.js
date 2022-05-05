import {useRef, useState} from 'react';


// Using value once-> useref | using value multiple times for every keystroke + reset value-> use state


const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid]= useState(false);
  const [enteredNameTouched, setEnteredNameTouched] =useState(false)

  const nameInputRef =useRef();

  const nameInputChangeHandler = (event) => {
    
    setEnteredName(event.target.value);

  }

  const formSubmissionHandler =event => {

    event.preventDefault();
    setEnteredNameTouched(true);
    
    if( enteredName.trim() === ''){
      setEnteredNameIsValid(false)
      return ;
    }

    setEnteredNameIsValid(true);


    console.log(enteredName)
    console.log("ref", nameInputRef.current.value)
  // nameInputRef.current.value = ''
    setEnteredName('')
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
  const nameInputCLasses = nameInputIsInvalid? 'form-control': 'form-control invalid'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputCLasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} value={enteredName}onChange={nameInputChangeHandler} />
        {!nameInputIsInvalid && <p className={'error-text'}>NAME MUST NOT BE EMPTY</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
