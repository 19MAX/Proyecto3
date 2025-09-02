import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './edit.css';

const EditCharacterForm = ({ selectedCharacter, editFormData, handleEditFormChange, handleEditSubmit, setView }) => {
  if (!selectedCharacter) return null;
  return (
    <div className='d-flex flex-column flex-md-row bg-dark text-light p-4 rounded shadow-lg' style={{ height: '100%' }}>
      <div className="d-flex flex-column align-items-center me-md-4 mb-4 mb-md-0" style={{ flex: '1' }}>
        <div className="characterImageContainer" >
          <img alt={selectedCharacter.name} src={selectedCharacter.image} className="characterImage" />
        </div>
      </div>
      <div className="d-flex flex-column" style={{ flex: '2' }}>
        <div className='d-flex align-items-center mb-4'>
          <Button variant="outline-light" className="me-3 rounded-pill" onClick={() => setView('home')}>
            <i className="fa-solid fa-arrow-left"></i>
          </Button>
          <h3 className="text-light">Editar personaje</h3>
        </div>
        <Form className='flex-grow-1 overflow-auto' onSubmit={handleEditSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Nombre</Form.Label>
            <Form.Control type="text" name="name" value={editFormData.name} onChange={handleEditFormChange} className="rounded-pill bg-dark text-light border-secondary" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Raza</Form.Label>
            <Form.Control type="text" name="race" value={editFormData.race} onChange={handleEditFormChange} className="rounded-pill bg-dark text-light border-secondary" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Poder</Form.Label>
            <Form.Control type="text" name="power" value={editFormData.power} onChange={handleEditFormChange} className="rounded-pill bg-dark text-light border-secondary" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Transformación</Form.Label>
            <Form.Control type="text" name="transformation" value={editFormData.transformation} onChange={handleEditFormChange} className="rounded-pill bg-dark text-light border-secondary" />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100 rounded-pill mt-4">Guardar Cambios</Button>
        </Form>
      </div>
    </div>
  );
};

export default EditCharacterForm;
