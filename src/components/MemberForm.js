import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LabelStyled = styled.label`
  display: flex;
  justify-content: space-between;
`

const DivInputStyled = styled.div`
  margin: 8px 0 8px 0;
`

const DivButtonStyled = styled.div`
  display: flex;
  margin: 8px 0 8px 0;
  justify-content: flex-end;
`

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

export default function MemberForm(props){
  const [ values, setValues ] = useState(initialFormValues);

  const editMember = props.memberToEdit;
  
  
  const submitMember = props.submit;
  const cancelEdit = props.cancel;
  const saveEdit = props.save;
  
  useEffect(() => {
    if(editMember.name === undefined){
      setValues(initialFormValues);
      return;
    }
    console.log(editMember);
    setValues(editMember);
  }, [editMember]);


  function onChange(evt){
    setValues({
      ...values,
      [evt.target.name]: evt.target.value
    })
  }

  function onSubmit(evt){
    evt.preventDefault();
    setValues(initialFormValues);
    editMember.name === undefined? submitMember(values) : saveEdit(values);
  }

  return (
    <form onSubmit={onSubmit}>
      {editMember.name !== undefined && <p>Editing: {editMember.name}</p>}
      <LabelStyled>
        Name
        <DivInputStyled>
          <input 
            name='name'
            type='text'
            value={values.name}
            onChange={onChange}
            placeholder='Start typing a name here...'
            maxLength='256'
            />
          </DivInputStyled>
      </LabelStyled>
    
      <LabelStyled>
        Email
        <DivInputStyled>
          <input 
            name='email'
            type='email'
            value={values.email}
            onChange={onChange}
            placeholder='username@email.com'
            />
          </DivInputStyled>
      </LabelStyled>
      
      <LabelStyled>
        Role
        <DivInputStyled>
          <select value={values.role} name='role' onChange={onChange}>
            <option value=''>Select Role</option>
            <option value='frontend_engineer'>Frontend Engineer</option>
            <option value='backend_engineer'>Backend Engineer</option>
            <option value='Graphic Designer'>Graphic Designer</option>
          </select>
        </DivInputStyled>
      </LabelStyled>

      <DivButtonStyled>
        {editMember.name !== undefined &&<button type='button' onClick={cancelEdit}>{'Cancel'}</button>}
        <button type='submit' disabled={Object.entries(values).filter(value => value[1] === '').length > 0}>{editMember.name === undefined? 'Submit' : 'Save'}</button>
      </DivButtonStyled>
    </form>
  )
}