import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const DeleteConfirmationModal = ({ show, handleClose, handleConfirm, characterName }) => (
  <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton className="bg-warning text-danger">
      <Modal.Title>Confirmar eliminación</Modal.Title>
    </Modal.Header>
    <Modal.Body className="bg-warning text-danger">¿Estás seguro de que deseas eliminar a **{characterName}**?</Modal.Body>
    <Modal.Footer className="bg-warning text-danger">
      <Button variant="primary" onClick={handleClose}>
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
    <Modal.Header closeButton className="bg-primary text-light">
      <Modal.Title>Éxito</Modal.Title>
    </Modal.Header>
    <Modal.Body className="bg-primary text-light">
      El personaje se agregó exitosamente a la pantalla de inicio.
    </Modal.Body>
    <Modal.Footer className="bg-primary text-light">
      <Button variant="success" onClick={handleClose}>
        Cerrar
      </Button>
    </Modal.Footer>
  </Modal>
);

