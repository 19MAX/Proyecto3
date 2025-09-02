import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const SearchComponent = ({ searchQuery, setSearchQuery, handleSearch, searchResults, handleAddCharacter, setView }) => {
  const isSearchMode = searchResults !== undefined;

  return (
    <>
    <div className="d-flex justify-content-center w-100">
      <Form onSubmit={handleSearch} className="d-flex my-4 w-75">
        <Form.Control
          type="search"
          placeholder="Busca un personaje..."
          className="me-2 rounded-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="primary" type="submit" className="rounded-full">Buscar</Button>
      </Form>
    </div>

      {isSearchMode && (
        <div className="d-flex flex-column align-items-center w-100">
          <Button variant="outline-light" className="m-3 rounded-pill" onClick={() => setView('home')}>Regresar a Inicio</Button>
          <h4 className="text-light mt-3">Resultados de la búsqueda</h4>
          <div className="d-flex flex-wrap justify-content-center gap-4 py-5 w-100">
            {searchResults.length > 0 ? (
              searchResults.map((char) => (
                <Card className="text-center animate__animated animate__fadeInUp bg-dark text-light border-0 shadow-lg" key={char.id} style={{ width: '18rem' }}>
                  <div className="overflow-hidden rounded-top">
                    <Card.Img variant="top" src={char.image || 'https://via.placeholder.com/286x180.png?text=No+Image'} alt={char.name} style={{ height: '180px', objectFit: 'contain' }} />
                  </div>
                  <Card.Body>
                    <Card.Title>{char.name}</Card.Title>
                    <Card.Text className="fw-bold">
                      {char.description ? char.description.slice(0, 100) : 'No hay descripción disponible.'}...
                    </Card.Text>
                    <div className="actionsButtons d-flex justify-content-center mt-3">
                      <Button variant="success" className="rounded-pill" onClick={() => handleAddCharacter(char)}>
                        <i className="fa-solid fa-plus"></i> Añadir
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p className="text-light">No se encontraron resultados.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchComponent;