import styled from "styled-components";

export default styled.button`
  border: 0;
  background: ${props =>
    props.primary ? "rgba(50, 105, 90, 1)" : props.active ? "#000" : "rgba(0, 0, 0, .5)"};
  ${props => (props.icon ? "font-family: sans-serif" : "")};
  color: #fff;
  padding: 5px 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;
