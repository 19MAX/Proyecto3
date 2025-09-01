import React from "react";
import PropTypes from "prop-types";
import "./cards.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Card({ imageSource, title, text, button }) {
    Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    button: PropTypes.array,
    imageSource: PropTypes.string
};
    return (
        <div className="card text-center animate__animated animate__fadeInUp">
            <div className="left-content">
            <img src='../../assets/dbz.jpeg' alt="a wallpaper"/>
            </div>
            <div className="card-body text-light right-content">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {text
                    ? text
                    : "DESCRIPCION DE PERSONAJE: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
                </p>
                <div className="actionsButtons">
                    <Link to={'/'}><Button variant="primary" className="backButton"><i className="fa-solid fa-arrow-left"></i></Button></Link>
                </div>
            </div>
        </div>
    );
}
