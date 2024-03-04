import React from 'react';
import './Form.css';

function Form() {


    return (
        <div className="Form__container">
            <h1>Register form</h1>
            <form>
                <label>
                    <span className='label_text'>Name:</span>
                    <input type="text" name="name" />
                    <span className='error_message'></span>
                </label>
                <label>
                    <span className='label_text'>Email:</span>
                    <input type="text" name="email" />
                    <span className='error_message'>...</span>
                </label>
                <label>
                    <span className='label_text'>Password:</span>
                    <input type="text" name="password" />
                    <span className='error_message'>...</span>
                </label>
                <label>
                    <span className='label_text'>Confirm:</span>
                    <input type="text" name="confirm" />
                    <span className='error_message'>...</span>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default Form;
