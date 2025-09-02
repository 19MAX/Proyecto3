import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CharacterList = ({ characters, handleViewMore, handleEdit, handleDelete }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 py-5 w-100">
      {characters.map((char) => (
        <Card 
          key={char.id} 
          className="text-center animate__animated animate__fadeInUp bg-dark text-light border-0 shadow-lg" 
          style={{ width: '18rem' }}
        >
          <div className="overflow-hidden rounded-top">
            <Card.Img 
              variant="top" 
              src={char.image || 'https://via.placeholder.com/286x180.png?text=No+Image'} 
              alt={char.name} 
              style={{ height: '180px', objectFit: 'contain' }} 
            />
          </div>
          <Card.Body>
            <Card.Title>{char.name}</Card.Title>
            <Card.Text className="fw-bold">
              {char.description ? char.description.slice(0, 100) : 'No hay descripción disponible.'}...
            </Card.Text>
            <div className="actionsButtons d-flex justify-content-center gap-2 mt-3">
              <Button variant="warning" className="rounded-pill" onClick={() => handleEdit(char)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </Button>
              <Button variant="warning" className="rounded-pill fw-bold" onClick={() => handleViewMore(char)}>
                VER MÁS
              </Button>
              <Button variant="danger" className="rounded-pill" onClick={() => handleDelete(char)}>
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