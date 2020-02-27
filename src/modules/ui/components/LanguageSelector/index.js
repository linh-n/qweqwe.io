import React, { useState } from "react";
import PropTypes from "prop-types";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/pro-light-svg-icons/faAngleDown";

import rtl from "utils/rtl";
import connectUI from "../../hoc/connect-ui";

const LanguageStyled = styled.div`
  margin: 0 20px;
  position: relative;

  .selector {
    font-weight: ${props => props.theme.fontWeightBold};
    color: #fff;
    opacity: 0.8;
    font-size: 0.95em;
    padding: 3px 6px;
    cursor: pointer;
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;

    svg {
      width: 1.5em;
    }

    &:hover {
      opacity: 1;
    }
  }

  .dropdown {
    position: absolute;
    top: 100%;
    ${rtl("left: 0;")};
    ${rtl("padding: 5px 6px;")};
    margin: 0;
    width: 100%;

    li {
      display: block;
      position: relative;

      button {
        border: 0;
        background: transparent;
        color: #fff;
        font-size: 0.95em;
        cursor: pointer;
        opacity: 0.7;
        padding: 3px 0;
        display: block;
        width: 100%;
        ${rtl("text-align: left;")};

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

const LanguageSelector = ({ availableLanguages, handleChangeLocale, currentLanguage, ...otherProps }) => {
  const [dropdownVisible, toggleDropdown] = useState(false);
  const dropdownItems = availableLanguages.filter(l => l.key !== currentLanguage);

  const selectLocale = key => {
    handleChangeLocale(key);
    toggleDropdown(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => toggleDropdown(false)}>
      <LanguageStyled className={otherProps.className}>
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
