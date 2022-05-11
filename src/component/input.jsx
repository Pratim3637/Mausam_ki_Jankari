import React from 'react'
import '../input.css';
import { BsSearch } from 'react-icons/bs';

function Input({text,submit,func}) {
  return (
    <form className='input' onSubmit={submit}>
        <input type="text" name="text" placeholder='Enter City Name' className='input-value' onChange={text} />
        <span className='input-icon' onClick={func}>
            <BsSearch></BsSearch>

        </span>
      
    </form>
  )
}

export default Input


