import React from "react";
import PropTypes from "prop-types";
import "./cards.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Card({ imageSource, title, text, buttons }) {
  Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  buttons: PropTypes.array,
  imageSource: PropTypes.string
};
  return (
    <div className="card text-center animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-light fw-bold">
          {text
            ? text
            : "DESCRIPCION DE PERSONAJE: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
        <div className="actionsButtons">
          <Link to="/update/:id">
          <Button variant="warning"><i className="fa-solid fa-pen-to-square"></i></Button>
          </Link>
          <Link to="/view/:id">
          <Button variant="warning">VER MAS</Button>
          </Link>
          <button type="button" className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
        </div>
      </div>
    </div>
  );
}

