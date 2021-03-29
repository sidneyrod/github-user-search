import React, { useState } from 'react';
import './styles.css';

type Props = {
  onSearch: (search: string) => void;
}

function Form({ onSearch }: Props) {
  const [search, setSearch] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(search);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  return (
    <div className="form-container">
      <h1 className="form-title">
        Encontre um perfil Github
      </h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          className="form-input"
          placeholder="Usuário Github"
          onChange={handleChange}
        />
        <br />
        <button className="btn btn-primary">
          Encontrar
        </button>
      </form>
    </div>
  );
}

export default Form;