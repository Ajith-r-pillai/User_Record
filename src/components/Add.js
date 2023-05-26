import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import uuid from "react-uuid";
import Header from "./Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Add() {

    const [id,setId]=useState('')
    const [uname,setUname]=useState('')
    const [Dob,setDob]=useState(Date)
    const [email,setemail]=useState('')
    const [salary,setSalary]=useState(0)
    const [gender,setgender]=useState('')


    useEffect(()=>{
        setId(uuid().slice(0,3))
       },[])
       let location=useNavigate()
      
      
      
        const addUser= async (e)=>{
          e.preventDefault()
        setId(uuid().slice(0,3))
       

        const body={
          id,
          uname,
          Dob,
          email,
          salary,
          gender
        
        }
       const result=await axios.post('http://localhost:8000/addUser',body)
      alert(result.data.message)
      location('/')
      ;
      }
      
const date =new Date()
 let mn=date.getMonth()+1
 let yr=date.getFullYear()
 let day=date.getDate()
 if(mn<=12){
  mn="0"+mn;
 }
 else{
  mn=mn
 }
 let dobdate=yr+"-"+mn+"-"+day


  return (
    <div>
         <Header></Header>
   <div  style={{width:'100%',alignItems:'center',display:'flex',alignItems:'center',justifyContent:'center',marginTop:'2rem'}}>
          <Form  className="form6">
          {" "}
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            {" "}
            <Form.Label  style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Name</Form.Label>{" "}
            <Form.Control style={{height:"2rem",width:'22rem'}} onChange={(e)=>setUname(e.target.value)} type="text" placeholder="" />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            {" "}
            <Form.Label  style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Date of Birth</Form.Label>{" "}
            <Form.Control style={{height:"2rem",width:'22rem'}} max={dobdate}  onChange={(e)=>setDob(e.target.value)} type="date" placeholder="" />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            {" "}
            <Form.Label  style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Email</Form.Label>
            <Form.Control style={{height:"2rem",width:'22rem'}}  onChange={(e)=>setemail(e.target.value)}  type="email" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>salary</Form.Label>
            <Form.Control style={{height:"2rem",width:'22rem'}}  onChange={(e)=>setSalary(e.target.value)} type="text" placeholder="" />{" "}
          </Form.Group>
          <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Gender</Form.Label>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">

              <input  onChange={(e)=>setgender(e.target.value)} type="radio" value="Male" name="gender" /> Male
            < input  onChange={(e)=>setgender(e.target.value)} style={{marginLeft:'10px'}} type="radio" value="Female" name="gender" /> Female
            <input  onChange={(e)=>setgender(e.target.value)}  style={{marginLeft:'10px'}} type="radio" value="Other" name="gender" /> Other
 
          </Form.Group>
          <Button  onClick={(e)=>addUser(e)} style={{backgroundColor:"#2ddf2d",color:'white',width:'9rem' ,height:'2.8rem'}}  className="ms-5" variant="light">
          <i class="fa-solid fa-user-plus"></i> Add
          </Button>
          </Form>
 </div>
    </div>
  )
}

export default Add