import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Garbage from './Garbage';
import axios from 'axios';
import Swal from 'sweetalert2';
function Edit() {
    const [id,setId]=useState('')
    const [gbid,setGbId]=useState('')
    const [gbname,setGbName]=useState('')
    const [quantity,setQuantity]=useState('')
    const [description,setDescription]=useState()

    //api call to get particular garbage
    const params=useParams()
    console.log(id);
    const fetchGarbage=async()=>{
        const result = await axios.get('http://localhost:8000/getgarbage/'+params.id)
        const details=result.data.garbage;
        setId(details.id)
        setGbId(details.gbid)
        setGbName(details.gbname)
        setQuantity(details.quantity)
        setDescription(details.description)
    }


    useEffect(()=>{
        fetchGarbage()

        
    },[])

    var index = Garbage.map(item=>item.id).indexOf(id)
    console.log(index);
    let history=useNavigate()
    const handleUpdate=async(e)=>{
        e.preventDefault()//avoid refreshing
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
          const result = await axios.post('http://localhost:8000/editgarbages',body)  
          alert(result.data.message)
          Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `Data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
        history('/')
    }
  return (
    <div className="text-center p-3">
    <h1 className='text-warning text-center'>Update Garbage Management System</h1>
    
        <Form className='border border-3 p-1 d-inline-block'>
        <Form.Group className="mb-2">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Enter your id" value={id} onChange={(e)=>setId(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label>Garbage Item Id</Form.Label>
            <Form.Control type="text" placeholder="Enter garbage item id" value={gbid} onChange={(e)=>setGbId(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label>Garbage Item Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Garbage Item Name" value={gbname} onChange={(e)=>setGbName(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" placeholder="Enter Quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" value={description} onChange={(e)=>setDescription(e.target.value)} required/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
            Update
        </Button>
    </Form>
        </div>
  )
}

export default Edit