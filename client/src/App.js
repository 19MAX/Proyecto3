import React, { useState } from 'react';
import axios from 'axios';
import CharacterList from "./components/CharacterList/CharacterList";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";
import EditCharacterForm from './components/EditCharacterForm/EditCharacterForm';
import SearchComponent from './components/SearchComponent/SearchComponent';
import { DeleteConfirmationModal, AddSuccessModal } from './components/modals/Modals';

// Datos de ejemplo
const initialCharacters = [
  { id: 1, name: 'Goku', race: 'Saiyan', power: 9001, transformation: 'Super Saiyan', description: 'Goku es el protagonista principal de la serie. Es un guerrero de la raza Saiyan con un corazón puro y un deseo insaciable de volverse más fuerte para proteger la Tierra.', image: 'https://i.blogs.es/04ac6a/2560_3000/1366_2000.jpeg' },
  { id: 2, name: 'Vegeta', race: 'Saiyan', power: 8500, transformation: 'Super Saiyan Blue', description: 'Vegeta es el príncipe de la raza Saiyan y el eterno rival de Goku. Su orgullo y determinación lo han impulsado a superar sus límites.', image: 'https://i.blogs.es/04ac6a/2560_3000/1366_2000.jpeg' },
  { id: 3, name: 'Gohan', race: 'Half-Saiyan', power: 7000, transformation: 'Ultimate Gohan', description: 'Gohan es el hijo mayor de Goku y un talentoso guerrero con un potencial oculto que supera a su padre. A lo largo de la historia, evoluciona de un niño asustadizo a un poderoso protector.', image: 'https://i.blogs.es/04ac6a/2560_3000/1366_2000.jpeg' },
];

const App = () => {
  const [characters, setCharacters] = useState(initialCharacters);
  const [view, setView] = useState('home');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [characterToDelete, setCharacterToDelete] = useState(null);
  const [showAddSuccessModal, setShowAddSuccessModal] = useState(false);

  const [editFormData, setEditFormData] = useState({
    name: '',
    race: '',
    power: '',
    transformation: '',
  });

  const handleViewMore = (character) => {
    setSelectedCharacter(character);
    setView('details');
  };

  const handleEdit = (character) => {
    setSelectedCharacter(character);
    setEditFormData({
      name: character.name,
      race: character.race,
      power: character.power,
      transformation: character.transformation,
    });
    setView('edit');
  };

  const handleDelete = (character) => {
    setCharacterToDelete(character);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setCharacters(prevCharacters => prevCharacters.filter(char => char.id !== characterToDelete.id));
    setShowDeleteModal(false);
    setCharacterToDelete(null);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setCharacters(prevCharacters => prevCharacters.map(char =>
      char.id === selectedCharacter.id ? { ...char, ...editFormData } : char
    ));
    setView('home');
    setSelectedCharacter(null);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setView('search');
      return;
    }
    try {
      const response = await axios.get(`https://dragonball-api.com/api/characters?name=${encodeURIComponent(searchQuery)}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setSearchResults([]);
    }
    setView('search');
  };

  const handleAddCharacter = (newCharacter) => {
    const existingCharacter = characters.find(char => char.name === newCharacter.name);
    if (existingCharacter) {
      setShowAddSuccessModal(true);
      return;
    }
    
    let updatedCharacters;
    if (characters.length >= 3) {
      updatedCharacters = [...characters.slice(0, 2), { ...newCharacter, id: Date.now() }];
    } else {
      updatedCharacters = [...characters, { ...newCharacter, id: Date.now() }];
    }

    setCharacters(updatedCharacters);
    setView('home');
    setSearchResults([]);
    setShowAddSuccessModal(true);
  };

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <>
            <SearchComponent
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
            />
            <CharacterList
              characters={characters}
              handleViewMore={handleViewMore}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        );
      case 'search':
        return (
          <SearchComponent
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
            searchResults={searchResults}
            handleAddCharacter={handleAddCharacter}
            setView={setView}
          />
        );
      case 'details':
        return (
          <CharacterDetails
            selectedCharacter={selectedCharacter}
            setView={setView}
          />
        );
      case 'edit':
        return (
          <EditCharacterForm
            selectedCharacter={selectedCharacter}
            editFormData={editFormData}
            handleEditFormChange={handleEditFormChange}
            handleEditSubmit={handleEditSubmit}
            setView={setView}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="App min-vh-100 text-light d-flex flex-column align-items-center" style={{padding: '20px'}}>
      
      <div className="container py-4">
        <h1 className="text-center mb-4 fw-bold" style={{ color: 'orange' }}>Dragon Ball Universe</h1>
        {renderContent()}
      </div>
      <DeleteConfirmationModal
        show={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleConfirm={confirmDelete}
        characterName={characterToDelete?.name}
      />
      <AddSuccessModal
        show={showAddSuccessModal}
        handleClose={() => setShowAddSuccessModal(false)}
      />
    </div>
  );
};

export default App;
