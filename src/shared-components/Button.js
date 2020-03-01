import styled from "styled-components";

export default styled.button`
  border: 0;
  background: ${props =>
    props.primary ? "rgba(50, 105, 90, 1)" : props.active ? "#000" : "rgba(0, 0, 0, .5)"};
  color: #fff;
  padding: 5px 20px;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: 0.9;
  }
`;
