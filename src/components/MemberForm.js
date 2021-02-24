import React, { useState } from 'react';
import styled from 'styled-components';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

export default function MemberForm(props){
  const [ values, setValues ] = useState(initialFormValues);

  const submitMember = props.submit;

  function onChange(evt){
    setValues({
      ...values,
      [evt.target.name]: evt.target.value
    })
  }

  function onSubmit(evt){
    evt.preventDefault();
    submitMember(values);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input 
          name='name'
          type='text'
          value={values.name}
          onChange={onChange}
          placeholder='Start typing a name here...'
          maxLength='256'
          />
      </label>
    
      <label>
        Email
        <input 
          name='email'
          type='email'
          value={values.email}
          onChange={onChange}
          placeholder='Start typing an email here...'
          />
      </label>
      
      <label>
        Role
        <select value={values.role} name='role' onChange={onChange}>
          <option value=''>Select Role</option>
          <option value='frontend_engineer'>Frontend Engineer</option>
          <option value='backend_engineer'>Backend Engineer</option>
          <option value='Graphic Designer'>Graphic Designer</option>
        </select>
      </label>

      <div>
        <button type='submit' disabled={Object.entries(values).filter(value => value[1] === '').length > 0}>Submit</button>
      </div>
    </form>
  )
}