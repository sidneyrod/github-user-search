import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Home() {
  return (
    <div className="home-container">
      <div className="title">
        <h1>Desafio do Capítulo 3, <br />Bootcamp DevSuperior</h1>
      </div>
      <div className="description">
        <p>
          Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
        </p>
        <p>
          Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.
        </p>
        <p>
          Este design foi adaptado a partir de Ant Design System for Figma, de Matheusz Wirzbicki: <a href="mailto: antforfigma@gmail.com">antforfigma@gmail.com</a>
        </p>
        <Link to="/search">
          <button className="btn btn-primary">Começar</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;