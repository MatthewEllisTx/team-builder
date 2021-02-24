import React, { useState } from 'react';
import styled from 'styled-components';

import Member from './Member';
import MemberForm from './MemberForm';

const starter = {
  name: 'Matthew',
  email: 'paranoidpenguin@gmail.com',
  role: 'epic hacker'
}

export default function Members(){
  const [members, setMembers] = useState([starter]);

  function submitMember(newMember){
    setMembers([...members, newMember])
  }

  return (
    <div>
      <MemberForm submit={submitMember}/>
      {members.map(member => <Member key={member.email} data={member}/>)}
    </div>
  )
}