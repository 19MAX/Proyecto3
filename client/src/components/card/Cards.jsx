import React from "react";
import Card from "./CardComplete";
import Search from "../search/Search";
import "./cards.css";
import { setFilter } from "react";

import dbz from '../../assets/dbz.jpeg'

export default function Cards() {
  const cards = [
  {
    id: 1,
    title: "Nombre de Personaje",
    image: dbz,
  },
  {
    id: 2,
    title: "Nombre de Personaje",
    image: dbz,
  },
  {
    id: 3,
    title: "Nombre de Personaje",
    image: dbz,
  },
];
  return (
    <div className="searchCard">
      <Search onSearch={setFilter} />
      <br />
      <br />
      <br />
      <br />
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}


