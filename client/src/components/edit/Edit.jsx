import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast';
import "./edit.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function EditCharacter() {
    const characters = {
    nombre: "",
    raza: "",
    poder: "",
    transformacion: "",
    };

    const [character, setCharacter] = useState(characters);

    const navigate = useNavigate();

    const { id } = useParams();

    const inputHandler = (e) => {
    const { name, value } = e.target;
    setCharacter({ ...character, [name]: value });
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/character/${id}`)
        .then((response) => {
        setCharacter(response.data);
        })
        .catch((error) => {
        console.log(error);
        });
    }, [id]);

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/character/${id}`, character).then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        navigate("/");
        })
        .catch((error) => {
        console.log(error);
        })
    }
    return (
    <div className='editUserContainer'> 
      <div className="left-content">
        <div className="characterImageContainer">
          <img alt="Imagen del personaje" className="characterImage"/>
        </div>
      </div>
      <div className="right-content">
        <div className='editUserHeader'>
          <Link to={'/'}>
            <Button variant="primary" className="backButton"><i className="fa-solid fa-arrow-left"></i></Button>
          </Link>
          <h3>Editar personaje</h3>
        </div>
        <Form className='editUserForm' onSubmit={submitForm}>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre del personaje" onChange={inputHandler} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Raza</Form.Label>
            <Form.Control type="text" placeholder="Raza del personaje" onChange={inputHandler} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Poder</Form.Label>
            <Form.Control type="text" placeholder="Poder del personaje" onChange={inputHandler} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Transformacion</Form.Label>
            <Form.Control type="text" placeholder="Transformacion del..." onChange={inputHandler} />
          </Form.Group>
          <Button variant="primary" type="submit"><i className="fa-solid fa-share"></i></Button>
        </Form>
      </div>
      
    </div>
  );
}
