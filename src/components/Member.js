import React from 'react';
import styled from 'styled-components';

export default function Member({data}){
  const {name, email, role} = data;

  return (
    <div>
      <h2>{name}</h2>
      <div>
        <p>{email}</p>
        <p>{role}</p>
      </div>
    </div>
  )
}