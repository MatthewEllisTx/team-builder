import React from 'react';
import styled from 'styled-components';

const DivTitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonStyled = styled.button`
  height: 21px;
  margin: auto 0;
`

const DivDetailsStyled = styled.div`
  margin-left: 2%;
`

export default function Member({data, startEdit}){
  const {name, email, role} = data;
  const startEditingCB = startEdit;

  function edit(){
    startEditingCB(data);
  }

  return (
    <div>
      <DivTitleStyled>
        <h2>{name}</h2>
        <ButtonStyled onClick={edit}>Edit</ButtonStyled>
      </DivTitleStyled>
      <DivDetailsStyled>
        <p>Email: {email}</p>
        <p>Role: {role}</p>
      </DivDetailsStyled>
    </div>
  )
}