import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
    const [id,setId]=useState('')
    const [uname,setUname]=useState('')
    const [Dob,setDob]=useState(Date)
    const [email,setemail]=useState('')
    const [salary,setSalary]=useState(0)
    const [gender,setgender]=useState('')
    const params=useParams()
const navigate=useNavigate()

    const fetchUser=async()=>{
        const result= await axios.get('http://localhost:8000/getAnUser/'+params.id)
     //  console.log(result.data.employee);
       
     
     setId(result.data.User.id)
     setUname(result.data.User.uname)
     setDob(result.data.User.Dob)
     setemail(result.data.User.email)
     setgender(result.data.User.gender)
     setSalary(result.data.User.salary)
     
       }


       const handleUpdate= async(e)=>{
        e.preventDefault()
        const body={
          id,
          uname,
          Dob,
          email,
          gender,
          salary
        }
        const result= await axios.post('http://localhost:8000/editUser',body)
        alert(result.data.message)
        navigate('/')
     
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
 
 useEffect(()=>{
        fetchUser()
      },[])

  return (
    <div>
         <Header></Header>
            <div>
   <div  style={{width:'100%',alignItems:'center',display:'flex',alignItems:'center',justifyContent:'center',marginTop:'2rem'}}>
          <Form  className="form6">
          {" "}
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            {" "}
            <Form.Label  style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Name</Form.Label>{" "}
            <Form.Control onChange={(e)=>setUname(e.target.value)} style={{height:"2rem",width:'22rem'}} value={uname} type="text" placeholder="" />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            {" "}
            <Form.Label  style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Date of Birth</Form.Label>{" "}
            <Form.Control onChange={(e)=>setDob(e.target.value)} style={{height:"2rem",width:'22rem'}} max={dobdate} value={Dob}  type="date" placeholder="" />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            {" "}
            <Form.Label  style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Email</Form.Label>
            <Form.Control onChange={(e)=>setemail(e.target.value)} style={{height:"2rem",width:'22rem'}}  value={email}   type="email" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextareal">
            <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>salary</Form.Label>
            <Form.Control onChange={(e)=>setSalary(e.target.value)} style={{height:"2rem",width:'22rem'}} value={salary}   type="text" placeholder="" />{" "}
          </Form.Group>
          <Form.Label style={{fontFamily:"-webkit-body",color: "rgba(94,114,141,255)",fontSize:"1.3rem"}}>Gender</Form.Label>
          <Form.Group  className="mb-3" controlId="exampleForm.ControlTextareal">

              <input type="radio" value="Male"  onChange={(e)=>setgender(e.target.value)} name="gender" /> Male
            < input style={{marginLeft:'10px'}} type="radio"  onChange={(e)=>setgender(e.target.value)} value="Female" name="gender" /> Female
            <input  style={{marginLeft:'10px'}} type="radio"  onChange={(e)=>setgender(e.target.value)} value="Other" name="gender" /> Other
 
          </Form.Group>
          <Button  onClick={(e)=>handleUpdate(e)}  style={{backgroundColor:"#2ddf2d",color:'white',width:'9rem' ,height:'2.8rem'}}  className="ms-5" variant="light">
          <i class="fa-solid fa-pen-to-square"></i> Edit
          </Button>
          </Form>
 </div>
    </div>
    </div>
  )
}

export default Edit