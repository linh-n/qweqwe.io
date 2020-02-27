import React, { useState } from "react";
import PropTypes from "prop-types";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/pro-light-svg-icons/faAngleDown";

import rtl from "utils/rtl";
import connectUI from "../../hoc/connect-ui";

const LanguageStyled = styled.div`
  position: relative;
  text-align: right;

  .selector {
    font-weight: ${props => props.theme.fontWeightBlack};
    color: #000;
    text-transform: uppercase;
    padding: 0.6em 2em;
    cursor: pointer;
    border: 0;
    background: transparent;
    align-items: center;
    display: block;
    width: 100%;
    text-align: right;

    svg {
      width: 1.5em;
    }

    &:hover {
      opacity: 1;
    }
  }

  .dropdown {
    margin: 0;
    padding: 0;

    li {
      display: block;
      position: relative;

      button {
        border: 0;
        padding: 0.6em 3.5em 0.6em 2em;
        text-transform: uppercase;
        background: transparent;
        color: #000;
        cursor: pointer;
        display: block;
        width: 100%;
        ${rtl("text-align: right;")};

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

const LanguageSelector = ({ availableLanguages, handleChangeLocale, currentLanguage }) => {
  const [dropdownVisible, toggleDropdown] = useState(false);
  const dropdownItems = availableLanguages.filter(l => l.key !== currentLanguage);

  const selectLocale = key => {
    handleChangeLocale(key);
    toggleDropdown(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => toggleDropdown(false)}>
      <LanguageStyled>
        <button className="selector" onClick={() => toggleDropdown(!dropdownVisible)}>
          {currentLanguage ? availableLanguages.find(l => l.key === currentLanguage).label : ""}
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
        {dropdownVisible && (
          <ul className="dropdown">
            {dropdownItems.map(item => (
              <li key={`lang-${item.key}`}>
                <button onClick={() => selectLocale(item.key)}>{item.label}</button>
              </li>
            ))}
          </ul>
        )}
      </LanguageStyled>
    </OutsideClickHandler>
  );
};

LanguageSelector.propTypes = {
  availableLanguages: PropTypes.arrayOf(PropTypes.object),
  currentLanguage: PropTypes.string,
  handleChangeLocale: PropTypes.func.isRequired,
};

LanguageSelector.defaultProps = {
  availableLanguages: [],
  currentLanguage: null,
};

export default connectUI(LanguageSelector);
