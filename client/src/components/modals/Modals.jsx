import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const DeleteConfirmationModal = ({ show, handleClose, handleConfirm, characterName }) => (
  <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton >
      <Modal.Title>Confirmar eliminación</Modal.Title>
    </Modal.Header>
    <Modal.Body className="text-danger"><h4>¿Estás seguro de que deseas eliminar a : {characterName}?</h4></Modal.Body>
    <Modal.Footer className="bg-light text-danger">
      <Button variant="secondary" onClick={handleClose}>
        Cancelar
      </Button>
      <Button variant="danger" onClick={handleConfirm}>
        Eliminar
      </Button>
    </Modal.Footer>
  </Modal>
);

export const AddSuccessModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton className="bg-success text-light">
      <Modal.Title>Éxito</Modal.Title>
    </Modal.Header>
    <Modal.Body className="bg-success text-light">
      <h4>El personaje se agregó exitosamente a la pantalla de inicio.</h4>
    </Modal.Body>
    <Modal.Footer className="bg-success text-light">
      <Button variant="secondary" onClick={handleClose}>
        Cerrar
      </Button>
    </Modal.Footer>
  </Modal>
);

