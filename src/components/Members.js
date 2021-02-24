import React, { useState } from 'react';
// import styled from 'styled-components';

import Member from './Member';
import MemberForm from './MemberForm';

const starter = {
  name: 'Matthew',
  email: 'paranoidpenguin@gmail.com',
  role: 'frontend_engineer'
}

export default function Members(){
  const [ members, setMembers ] = useState([starter]);
  const [ editMember, setEditMember ] = useState({});

  function submitMember(newMember){
    setMembers([...members, newMember]);
  }

  function startEditingMember(member){
    setEditMember(member);
  }

  function cancelEditingMember(){
    setEditMember({});
  }

  function saveEditedMember(newMember){
    const newMemberList = members.filter( member => member !== editMember);
    newMemberList.push(newMember);
    setEditMember({});
    setMembers(newMemberList);
  }

  return (
    <div>
      <MemberForm submit={submitMember} cancel={cancelEditingMember} save={saveEditedMember} memberToEdit={editMember}/>
      {members.map(member => <Member key={member.email} data={member} startEdit={startEditingMember}/>)}
    </div>
  )
}