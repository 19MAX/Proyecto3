import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { API_BASE_URL } from '../../services/api';

const CharacterList = ({ characters, handleViewMore, handleEdit, handleDelete }) => {
  if (characters.length === 0) {
    return (
      <div className="text-center text-light py-5">
        <h4>No hay personajes creados</h4>
        <p>¡Crea tu primer personaje usando el botón "Crear Personaje"!</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
      {characters.map((character) => (
        <Card className="text-center animate__animated animate__fadeInUp bg-dark text-light border-0 shadow-lg" key={character._id} style={{ width: '20rem' }}>
          <div className="overflow-hidden rounded-top">
            <Card.Img
              variant="top"
              src={API_BASE_URL + character.imagen || 'https://via.placeholder.com/286x180.png?text=No+Image'}
              alt={character.nombre}
              style={{ height: '180px', objectFit: 'cover' }}
            />
          </div>
          <Card.Body>
            <Card.Title>{character.nombre}</Card.Title>
            <Card.Text className="fw-bold">
              {character.raza} - Poder: {character.poder}
            </Card.Text>
            <div className="actionsButtons d-flex justify-content-center gap-2 mt-3">
              <Button title='Ver detalles' variant="outline-info" className="rounded-pill" onClick={() => handleViewMore(character)}>
                <i className="fa-solid fa-eye"></i>
              </Button>
              <Button title='Editar información' variant="outline-warning" className="rounded-pill" onClick={() => handleEdit(character)}>
                <i className="fa-solid fa-edit"></i>
              </Button>
              <Button title='Eliminar personaje' variant="outline-danger" className="rounded-pill" onClick={() => handleDelete(character)}>
                <i className="fa-solid fa-trash"></i>
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CharacterList;