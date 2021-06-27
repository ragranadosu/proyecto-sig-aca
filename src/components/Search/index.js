import React from 'react';

// import assets / css styles
import SearchIcon from '../../assets/search-icon.svg';
import './search.css';

export const Search = ({handleSearch}) => {
  
  const onChange = (e) => {
    handleSearch(e.target.value)
  }

  return (
    <div className="search-wrapper">
      <div className="search-input-group">
        <img className="search-icon" src={SearchIcon} alt="search-icon" />

        <input
          type="text"
          placeholder="Busca tu ruta"
          className="search-input"
          onChange={onChange}
        />
      </div>
      
    </div>
  );
};
