import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from "react";
import "./search.css";

export default function Search() {
    return (
    <div className="d-flex justify-content-center align-items-center">
        <Form className="d-flex">
        <Form.Control type="search" placeholder="Search" className="me-2 w-75" aria-label="Search"/>
        <Button variant="outline-dark"><i class="fa-solid fa-magnifying-glass"></i></Button>
        </Form>
    </div>  
    );
}

