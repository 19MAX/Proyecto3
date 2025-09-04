import React, { useState, useEffect } from "react";
import api from "./services/api.js"; // Importar la configuración de axios
import CharacterList from "./components/CharacterList/CharacterList";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";
import EditCharacterForm from "./components/EditCharacterForm/EditCharacterForm";
import CreateCharacterForm from "./components/CreateCharacterForm/CreateCharacterForm"; // Nuevo componente
import {
  DeleteConfirmationModal,
  AddSuccessModal,
} from "./components/modals/Modals";
import { Button } from "react-bootstrap";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [view, setView] = useState("home");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [characterToDelete, setCharacterToDelete] = useState(null);
  const [showAddSuccessModal, setShowAddSuccessModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar personajes al iniciar
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await api.get("/personajes");
      setCharacters(response.data.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching characters:", err);
      // setError('Error al cargar los personajes');
    } finally {
      setLoading(false);
    }
  };

  const handleViewMore = (character) => {
    setSelectedCharacter(character);
    setView("details");
  };

  const handleEdit = (character) => {
    setSelectedCharacter(character);
    setView("edit");
  };

  const handleDelete = (character) => {
    setCharacterToDelete(character);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await api.delete(`/personajes/eliminar/${characterToDelete._id}`);
      setCharacters((prevCharacters) =>
        prevCharacters.filter((char) => char._id !== characterToDelete._id)
      );
      setShowDeleteModal(false);
      setCharacterToDelete(null);
    } catch (err) {
      console.error("Error deleting character:", err);
      setError("Error al eliminar el personaje");
    }
  };

  const handleEditSubmit = async (formData) => {
    try {
      const response = await api.put(
        `/personajes/editar/${selectedCharacter._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setCharacters((prevCharacters) =>
        prevCharacters.map((char) =>
          char._id === selectedCharacter._id ? response.data.data : char
        )
      );
      setView("home");
      setSelectedCharacter(null);
    } catch (err) {
      console.error("Error updating character:", err);
      setError("Error al actualizar el personaje");
    }
  };

  const handleCreateCharacter = async (formData) => {
    try {
      const response = await api.post("/personajes/crear", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setCharacters((prevCharacters) => [
        ...prevCharacters,
        response.data.data,
      ]);
      setView("home");
      setShowAddSuccessModal(true);
    } catch (err) {
      console.error("Error creating character:", err);
      setError("Error al crear el personaje");
    }
  };

  const renderContent = () => {
    if (loading) {
      return <div className="text-center text-light">Cargando...</div>;
    }

    if (error) {
      return <div className="text-center text-danger">{error}</div>;
    }

    switch (view) {
      case "home":
        return (
          <>
            <div className="d-flex justify-content-center">
              <Button variant="light" onClick={() => setView("create")}>
                <i className="fa-solid fa-plus me-2"></i>
                Crear Personaje
              </Button>
            </div>
            <CharacterList
              characters={characters}
              handleViewMore={handleViewMore}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        );
      case "create":
        return (
          <CreateCharacterForm
            handleCreateCharacter={handleCreateCharacter}
            setView={setView}
          />
        );
      case "details":
        return (
          <CharacterDetails
            selectedCharacter={selectedCharacter}
            setView={setView}
          />
        );
      case "edit":
        return (
          <EditCharacterForm
            selectedCharacter={selectedCharacter}
            handleEditSubmit={handleEditSubmit}
            setView={setView}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid min-vh-100">
        <h1 className="text-center mb-4 fw-bold" style={{ color: "orange" }}>
          Dragon Ball X
        </h1>
      <div className="">{renderContent()}</div>

      <DeleteConfirmationModal
        show={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleConfirm={confirmDelete}
        characterName={characterToDelete?.nombre}
      />

      <AddSuccessModal
        show={showAddSuccessModal}
        handleClose={() => setShowAddSuccessModal(false)}
      />
    </div>
  );
};

export default App;
