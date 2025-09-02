import React from 'react';
import { Button } from 'react-bootstrap';

const CharacterDetails = ({ selectedCharacter, setView }) => {
  if (!selectedCharacter) return null;
  return (
    <div className="d-flex flex-column flex-md-row bg-dark text-light p-4 rounded shadow" style={{ height: '100%' }}>
      <div className="d-flex flex-column align-items-center me-md-4 mb-4 mb-md-0" style={{ flex: '1' }}>
        <div className="rounded-lg overflow-hidden shadow-lg" style={{ width: '100%', height: '100%', maxWidth: '300px' }}>
          <img alt={selectedCharacter.name} src={selectedCharacter.image} className="img-fluid" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
        </div>
      </div>
      <div className="d-flex flex-column" style={{ flex: '2' }}>
        <h2 className="text-center text-md-start text-light mb-4">{selectedCharacter.name}</h2>
        <div className="flex-grow-1 overflow-auto pe-3">
          <p className="text-light fs-5">**Raza:** {selectedCharacter.race}</p>
          <p className="text-light fs-5">**Poder:** {selectedCharacter.power}</p>
          <p className="text-light fs-5">**Transformación:** {selectedCharacter.transformation}</p>
          <p className="text-light mt-4 fs-5">
            **Descripción Completa:**
            <br />
            {selectedCharacter.description}
          </p>
        </div>
        <Button variant="warning" className="mt-4 w-50 mx-auto rounded-pill" onClick={() => setView('home')}>Regresar</Button>
      </div>
    </div>
  );
};

export default CharacterDetails;