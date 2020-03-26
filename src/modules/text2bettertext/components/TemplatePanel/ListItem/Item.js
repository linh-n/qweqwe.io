import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ItemName = styled.div`
  font-family: ${props => props.theme.fontFamilyMono};
  flex: 1;
  padding: 7px 15px;
  margin-right: 5px;
  cursor: pointer;
`;

const DeleteCommand = styled.button`
  flex: 0 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  display: none;
  border: 0;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  cursor: pointer;

  &:hover {
    background: red;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

const ItemStyled = styled.div`
  display: flex;

  &:hover {
    ${DeleteCommand} {
      display: block;
    }

    ${ItemName} {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

const Item = ({ name }) => (
  <ItemStyled>
    <ItemName>{name}</ItemName>
    <DeleteCommand>∅</DeleteCommand>
  </ItemStyled>
);

Item.propTypes = {
  name: PropTypes.node,
};

Item.defaultProps = {
  name: null,
};

export default Item;
