import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import './Admin.css'
import Header from "./Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Admin() {
    const [allEmployees, setAllemployees] = useState([]);
    const [searchkey, setsearchkey] = useState("");
 
    const fetchData = async () => {
        const result = await axios.get("http://localhost:8000/getAllUser");
        setAllemployees(result.data.employees);
      };
      const handleDelete = async (id) => {
        const result = await axios.delete(
          "http://localhost:8000/deleteUser/"+ id
        );
        alert(result.data.message);
        //  console.log(result.data.resu);
        fetchData();
      };


 
      useEffect(() => {
        fetchData();
        }, []);
        
const[order,setorder] = useState("ASC");

const sorting =(col) => { 
if (order==="ASC") { 
    const sorted =[...allEmployees].sort((a, b) => 
a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1

);
setAllemployees(sorted);
 setorder("DSC");
}
if (order === "DSC") {
const sorted = [...allEmployees].sort((a, b) =>
a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1

);
setAllemployees(sorted);
setorder ("ASC")
}   }
 
    return (
 <div>
     <Header></Header>
     <div style={{width:'100%',display:'flex',justifyContent:'end',alignItems:'center',marginTop:'3rem'}}>
        <p style={{fontSize:'1.5rem'}}>view Alphabeticaly  </p>
     <Button onClick={()=>sorting("uname")} variant="danger" className="me-3">
     <i class="fa-solid fa-sort"></i>
                    Asc&Dsc
                    </Button>
     </div>
     <h1 className="text-center text-black" style={{marginTop:'3rem'}}>
        <i class="fa-solid fa-house-chimney me-3"></i>
        User Record App
      </h1>
    
                    
      <div className='searchh' style={{marginTop:'3rem'}}> <i style={{fontSize:'1.7rem',color:'#2596be'}} class="fa-solid fa-magnifying-glass"></i>  <input id='inp' type="text" style={{outline:'none'}} placeholder="Enter Name" onChange={(e)=>setsearchkey(e.target.value)}/></div>
      <Table style={{marginTop:'3rem'}} className="w-75 container" striped bordered hover variant="dark">
        
        <thead>
          <tr>
            <th>#</th>

            <th >Name</th>

            <th>Date of Birth</th>

            <th>Email id</th>

            <th>Salary</th>

            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
         allEmployees.filter((val) => {
            if (searchkey == "") {
            return val
          } else if (
           val.uname.toLowerCase().includes(searchkey.toLowerCase()))  {
            return val
          }}) .map((item, index) =>( 
             <tr>
                <td>{index+1}</td>

                <td>{item.uname}</td>

                <td>{item.Dob.slice(0,10)}</td>

                <td>{item.email}</td>

                <td>{item.salary}</td>
                <td>{item.gender}</td>

                <td>
                  <Link to={"edit/" + item.id}>
                    <Button variant="success" className="me-3">
                      <i class="fa-solid fa-user-pen me-2"></i>
                      Edit
                    </Button>
                  </Link>
                 
                  <Button
                      onClick={() => handleDelete(item.id)}
                    variant="danger"
                  >
                    <i class="fa-solid fa-user-xmark me-2"></i>
                    Delete
                  </Button>
                </td>
              </tr>
))}
        </tbody>
      </Table>
      
   
        
    </div>
  )
}

export default Admin