import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from"./home.module.css"

export const CreateUser = () => {
  let [name,setName]=useState("")
  let [salary,setSalary]=useState("")
  let [company,setCompany]=useState("")
  let Navigate=useNavigate()

  let nameData=(e)=>{
    setName(e.target.value)
  }
  let salaryData=(e)=>{
    setSalary(e.target.value)
  }
  let companyData=(e)=>{
    setCompany(e.target.value)
  }


let formData=(e)=>{
  e.preventDefault()
  let payload ={name,salary,company}
  axios.post("http://localhost:3000/users",payload)
  .then(()=>{
    console.log("DATA HASE BEEN ADDED");
    
  }) 

  Navigate("/")
}

  return (
    
    <div id={style.fromBox}>
    
    

    <form action="">
      <h2>Create-User</h2>
        <label htmlFor="ename">Emp-Name:</label><br/>
        <input type="text" value={name} onChange={nameData}/><br/>
        
        <label htmlFor="esalary">Emp-Salary:</label><br/>
        <input type="text"  value={salary} onChange={salaryData}/><br/>
        
        <label htmlFor="ename">Emp-Company:</label><br/>
        <input type="text" value={company} onChange={companyData}/><br/>
        <button onClick={formData}>Submit</button>
    </form>

    <footer id={style.footer}>
      <p>&copy; anshul.</p>
    </footer>

    </div>    

  )
}
export default CreateUser
