import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Garbage from './Garbage';
import uuid from 'react-uuid';
import axios from 'axios';
import Swal from 'sweetalert2';

function Add() {
  const [id,setId]=useState('')
    const [gbid,setGbId]=useState('')
    const [gbname,setGbName]=useState('')
    const [quantity,setQuantity]=useState('')
    const [description,setDescription]=useState()

    useEffect(()=>{
      setId(uuid().slice(0,8))

    },[])
    const history=useNavigate()
    const handleAdd=async(e)=>{
      e.preventDefault()  
      if (!gbid || !gbname || !quantity || !description) {
        return Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'All fields are required.',
            showConfirmButton: true
        });
    }  
      const body={
        id,
        gbid,
        gbname,
        quantity,
        description
      }
      const result = await axios.post('http://localhost:8000/addgarbages',body)
      console.log(result);
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `Data has been Added.`,
        showConfirmButton: false,
        timer: 1500
    });
      history('/')
      }
  return (
    <div className="text-center p-3">
      <h1 className='text-warning'>Add Garbage details</h1>
      <Form className='border border-3 p-1 d-inline-block'>
        <Form.Group className="mb-2">
            <Form.Label>Garbage Item Id</Form.Label>
            <Form.Control type="text" placeholder="Enter Garbage Item Id" 
            onChange={(e)=>setGbId(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label>Garbage Item Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Garbage Item Name" 
            onChange={(e)=>setGbName(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" placeholder="Enter Quantity" 
            onChange={(e)=>setQuantity(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" 
            onChange={(e)=>setDescription(e.target.value)} required/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e)=>handleAdd(e)}>
            Add
        </Button>
      </Form>
    </div>
  )
}

export default Add
