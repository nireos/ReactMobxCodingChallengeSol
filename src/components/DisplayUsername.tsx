import React from 'react'
import userStore from '../stores/CurrentUser.store'
import { observer } from "mobx-react";

const DisplayUserName = ()=>{
  return  (<p>{userStore.currentUser.getName()  + userStore.currentUser.getAge()}</p>)
} 
//
const ObservedDisplayUserName = observer(DisplayUserName);
 
function UserDetails() {
    return (
      <> 
        <ObservedDisplayUserName />
      </>
    );
  }
export default UserDetails;