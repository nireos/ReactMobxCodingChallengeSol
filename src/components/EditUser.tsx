import React from 'react'
import userStore from '../stores/CurrentUser.store'

export const EditUser = ()=>{
    return (
    <div>
    <input onChange={(value) => userStore.setName(value.target.value)}></input>
    <input onChange={(value) => userStore.setAge( parseInt(value.target.value))}></input>
    </div>
    )
}