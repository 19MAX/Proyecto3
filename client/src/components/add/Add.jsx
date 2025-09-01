import React, { useState } from "react";
import CardSingle from "../card/CardSingle";
import "./add.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddCharacter() {

    const [character, setCharacter] = useState({});
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:8000/api/character",character);
        toast.success(response.data.message, { position: "top-right" });
        navigate("/");
    }   catch (error) {
            console.log(error);
            toast.error("Error al agregar personaje");
        }
    };
    return (
    <div className="App">
      {/* Aquí CardSingle debería tener inputs para setear el character */}
        <CardSingle character={character} setCharacter={setCharacter} />

        <button onClick={handleSubmit} className="btn btn-primary mt-3">
        {/* Guardar Personaje */}
        </button>
    </div>
    );
}


