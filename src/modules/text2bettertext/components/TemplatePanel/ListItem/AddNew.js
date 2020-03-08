import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AddCommand = styled.button`
  flex: 1;
  padding: 7px 15px;
  cursor: pointer;
  border: 0;
  background: transparent;
  text-align: left;
  color: #fff;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

const ItemStyled = styled.div`
  display: flex;
`;

const Item = ({ callBack }) => (
  <ItemStyled>
    <AddCommand onClick={callBack}>+</AddCommand>
  </ItemStyled>
);

Item.propTypes = {
  callBack: PropTypes.func.isRequired,
};

export default Item;
