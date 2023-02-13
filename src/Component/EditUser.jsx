import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, UNSAFE_enhanceManualRouteObjects, useNavigate, useParams } from 'react-router-dom'
import style from"./home.module.css"

const EditUser = () => {
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")
    
    let{index} = useParams()
    let navigate = useNavigate()

    console.log(index);

      let nameData=(e)=>{
        setName(e.target.value)
      }
      let salaryData=(e)=>{
        setSalary(e.target.value)
      }
      let companyData=(e)=>{
        setCompany(e.target.value)
      }
    
    

    useEffect(()=>{
      axios.get(`http://localhost:3000/data/${index}`)
      .then((x)=>{
          // console.log(x.data);
          setName(x.data.name)
          setSalary(x.data.salary)
          setCompany(x.data.company)

      })
  },[index])

    let formData=(e)=>{
        e.preventDefault()
        let payload ={name,salary,company}
        axios.put(`http://localhost:3000/users/${index}`,payload)
        .then(()=>{
          console.log("DATA HAS BEEN ADDED AFTER EDIT");
        
          
        }) 
        navigate("/")
      }

  return (
    
    <div id={style.fromBox}>
    
    <form action="">
      <h2>Create-User</h2>
        <label htmlFor="ename">Emp-Name:</label><br/>
        <input type="text" id='ename' value={index.name} onChange={nameData}/><br/>
        
        <label htmlFor="esalary">Emp-Salary:</label><br/>
        <input type="text" id='esalary'  value={index.salary} onChange={salaryData}/><br/>
        
        <label htmlFor="ename">Emp-Company:</label><br/>
        <input type="text" id='ename' value={index.company} onChange={companyData}/><br/>
        <button onClick={formData}>Submit</button>
    </form>
    </div>
  )
}
export default EditUser

