import React from 'react'
import Garbage from './Garbage'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserTimes,FaUserPlus,FaUserEdit,FaPrint } from "react-icons/fa";
import axios from 'axios';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2';
import './print.css';

function Home() {
  const [allGarbages,setAllGarbages]=useState([])

  const fetchdata=async()=>{
    const result=await axios.get('http://localhost:8000/allgarbages')
    setAllGarbages(result.data.garbages)
  }
  console.log(allGarbages);
  useEffect(()=>{
    fetchdata()
  },[])
  const history=useNavigate()
  const handleDelete=async(id)=>{
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
  }).then(async result => {
      if (result.value) {
        const result=await axios.delete('http://localhost:8000/deletegarbages/'+id)

          Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: `Data has been deleted.`,
              showConfirmButton: false,
              timer: 1500,
          });
          fetchdata()
          history('/')
      }
  });
  }
  const handleEdit=async(id,gbid,gbname,quantity,description)=>{
    localStorage.setItem('ID',id)
    localStorage.setItem('Garbage Item Id',gbid)
    localStorage.setItem('Garbage Item Name',gbname)
    localStorage.setItem('Quantity',quantity)
    localStorage.setItem('Description',description)
  }
  const handlePrint = () => {
    window.print();
  }


  return (
    <>
    <h1 className='text-warning text-center'>Garbage Management System</h1>
    
    <Link to={'/Add'}>
    <Button variant="success ms-2 no-print">Add <FaUserPlus/></Button>
    </Link>
    
        <Button style={{marginLeft: "1em"}} onClick={handlePrint} className="no-print">Print<FaPrint /></Button>
    
    <h3 className='ms-2'>List of Garbages</h3>
    <Table bordered hover variant="dark" style={{margin: "1.5em"}}>
      <thead>
        <tr>
          <th>id</th>
          <th>Garbage Id</th>
          <th>Garbage Name</th>
          <th>Quantity</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            allGarbages?.map((item)=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.gbid}</td>
                    <td>{item.gbname}</td>
                    <td>{item.quantity}</td>
                    <td>{item.description}</td>
                    <td>
                      <Link to={'/Edit/'+item.id}>
                      <Button onClick={()=>handleEdit(item.id,item.gbid,item.gbname,item.quantity,item.description)} variant="info no-print"><FaUserEdit/></Button>
                      </Link>
                    
                    <Button onClick={()=>handleDelete(item.id)} variant="primary no-print"><FaUserTimes/></Button>
                    
                    </td>
                </tr>
            ))
        }
      </tbody>
    </Table>
    </>
  )
}

export default Home