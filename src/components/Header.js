import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import './Header.css'
function Header() {
  const navigate=useNavigate()
  return (
    <div className='Header-main'>
<Link to={'/'} style={{textDecoration:'none',color:'white'}}><h1 style={{textDecoration:'none',color:'white'}}> Users</h1></Link>

<Link to={'add'}><Button style={{backgroundColor:'red'}}  variant=""> <i class="fa-solid fa-user-plus"></i>Add User</Button></Link>

</div>
  )
}

export default Header