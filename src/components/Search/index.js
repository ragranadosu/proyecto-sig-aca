import React from 'react';
import {useState} from 'react';

import Routes from '../../data/RoutesNames';
// import assets / css styles
import SearchIcon from '../../assets/search-icon.svg';
import DropdownIcon from '../../assets/down-chevron.svg';
import './search.css';

export const Search = ({handleSearch, filteredRoute, handleClickItem}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [items, setItems] = useState(['AB', 'MB']);
  const [optionSelected, setOptionSelected] = useState('AB');

  const onChange = (e) => {
    handleSearch(e.target.value);
  };

  const onClickRoute = (event, route) => {
    event.preventDefault();
    event.stopPropagation();
    handleClickItem(route);
  };

  const toogleList = () => {
    setShowOptions(!showOptions);
  };

  const onOptionClick = (item) => {
    setOptionSelected(item);
    setShowOptions(!showOptions);
  };

  const routes = optionSelected === 'AB' ? Routes.buses : Routes.microbuses;

  const listItems = routes.filter((route) => {
    if (route.name.toLowerCase().includes(filteredRoute.toLowerCase())) {
      return route;
    }
  });

  return (
    <>
      {/* Search component */}
      <div className="search-wrapper">
        <div className="dd-wrapper">
          <button className="dd-header" onClick={toogleList}>
            <span className="dd-header-title">{optionSelected}</span>
            <img
              src={DropdownIcon}
              alt="dropdownIcon"
              width="20"
              style={
                showOptions
                  ? {
                      transform: 'rotate(180deg)',
                      transition: 'transform 0.35s linear',
                    }
                  : {
                      transform: 'rotate(0deg)',
                      transition: 'transform 0.35s linear',
                    }
              }
            />
          </button>

          {showOptions && (
            <div className="dd-list">
              {items.map((i, key) => (
                <button
                  className="dd-list-item"
                  key={key}
                  onClick={() => onOptionClick(i)}
                >
                  {i}
                </button>
              ))}
            </div>
          )}
        </div>

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
        <ul className="search-suggestions">
          {listItems.map((item, key) => (
            <li
              onClick={(e) => onClickRoute(e, item.route)}
              className="search-item"
              key={key}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
