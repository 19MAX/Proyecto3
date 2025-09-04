import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { API_BASE_URL } from '../../services/api';
import { CustomCard } from '../Card/CustomCard';

const EditCharacterForm = ({ selectedCharacter, handleEditSubmit, setView }) => {
  const [formData, setFormData] = useState({
    nombre: selectedCharacter.nombre || '',
    raza: selectedCharacter.raza || '',
    poder: selectedCharacter.poder || '',
    transformaciones: selectedCharacter.transformaciones ? selectedCharacter.transformaciones.join(', ') : '',
    imagen: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, imagen: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null) {
        submitData.append(key, formData[key]);
      }
    });

    handleEditSubmit(submitData);
  };

  return (
    <div className="d-flex justify-content-center mt-3 gap-5">
      <CustomCard className="flex-fill justify-content-center rounded-4" style={{ width: 200, height: 500 }}>
        <img
          alt={selectedCharacter.nombre}
          src={API_BASE_URL + selectedCharacter.imagen || 'https://via.placeholder.com/300x400?text=No+Image'}
          className="img-fluid"
        />
      </CustomCard>
      <CustomCard className="flex-fill">

        <div className="d-flex flex-column" style={{ flex: '2' }}>
          <div className='d-flex align-items-center mb-4'>
            <Button variant="outline-light" className="me-3 rounded-pill" onClick={() => setView('home')}>
              <i className="fa-solid fa-arrow-left"></i>
            </Button>
            <h3 className="text-light">Editar personaje</h3>
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="text-light">Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className="rounded-pill bg-dark text-light border-secondary"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light">Raza</Form.Label>
              <Form.Control
                type="text"
                name="raza"
                value={formData.raza}
                onChange={handleInputChange}
                className="rounded-pill bg-dark text-light border-secondary"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light">Poder</Form.Label>
              <Form.Control
                type="number"
                name="poder"
                value={formData.poder}
                onChange={handleInputChange}
                className="rounded-pill bg-dark text-light border-secondary"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light">Transformaciones (separadas por coma)</Form.Label>
              <Form.Control
                type="text"
                name="transformaciones"
                value={formData.transformaciones}
                onChange={handleInputChange}
                className="rounded-pill bg-dark text-light border-secondary"
              />
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label className="text-light">Nueva Imagen (opcional)</Form.Label>
              <Form.Control
                type="file"
                name="imagen"
                onChange={handleFileChange}
                className="bg-dark text-light border-secondary"
                accept="image/*"
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100 rounded-pill mt-4">
              Guardar Cambios
            </Button>
          </Form>
        </div>
      </CustomCard>
    </div>

  );
};

export default EditCharacterForm;