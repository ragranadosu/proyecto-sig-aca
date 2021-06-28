import React from 'react';

import Routes from '../../data/RoutesNames';
// import assets / css styles
import SearchIcon from '../../assets/search-icon.svg';
import './search.css';

export const Search = ({handleSearch, filteredRoute}) => {
  const onChange = (e) => {
    handleSearch(e.target.value);
  };

  const routes = Routes.all;

  const listItems = routes.filter((route) => {
    if (route.name.toLowerCase().includes(filteredRoute.toLowerCase())) {
      return route;
    }
  });

  return (
    <>
      {/* Search component */}
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

      {/* Suggestions depends of the search query */}

      {filteredRoute !== '' && (
        <div className="search-suggestions">
          <ul>
            {listItems.map((item, key) => (
              <li key={key}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
