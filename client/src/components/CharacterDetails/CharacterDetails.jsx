import React from "react";
import { Button } from "react-bootstrap";
import { API_BASE_URL } from "../../services/api";
import { CustomCard } from "../Card/CustomCard";

const CharacterDetails = ({ selectedCharacter, setView }) => {
  if (!selectedCharacter) return null;

  return (
    <div className="d-flex justify-content-center mt-3 gap-5">
      <CustomCard
        className="flex-fill justify-content-center rounded-4"
        style={{ width: 200, height: 500 }}
      >
        <img
          alt={selectedCharacter.nombre}
          src={
            API_BASE_URL + selectedCharacter.imagen ||
            "https://via.placeholder.com/300x400?text=No+Image"
          }
          className="img-fluid"
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </CustomCard>

      <CustomCard className="flex-fill">
        <div className="d-flex flex-column" style={{ flex: "2" }}>
          <div className="d-flex align-items-center mb-4">
            <Button
              variant="outline-light"
              className="me-3 rounded-pill"
              onClick={() => setView("home")}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </Button>
            <h3 className="text-light">Regresar</h3>
          </div>

        <div className="flex-grow-1 overflow-auto ps-5">
          <h2 className="text-center text-md-start text-light mb-4">
            {selectedCharacter.nombre}
          </h2>
          <p className="text-light fs-5">
            <strong>Raza:</strong> {selectedCharacter.raza}
          </p>
          <p className="text-light fs-5">
            <strong>Poder:</strong> {selectedCharacter.poder}
          </p>
          <p className="text-light fs-5">
            <strong>Transformaciones:</strong>{" "}
            {selectedCharacter.transformaciones
              ? selectedCharacter.transformaciones.join(", ")
              : "Ninguna"}
          </p>
        </div>
        </div>
      </CustomCard>
    </div>
  );
};

export default CharacterDetails;
