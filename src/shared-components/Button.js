import styled from "styled-components";

export default styled.button`
  border: 0;
  border-radius: ${props => (props.icon ? "0" : "0 10px 10px 10px")};
  background: ${props =>
    props.primary ? "rgba(50, 105, 90, 1)" : props.active ? "#000" : "rgba(0, 0, 0, .5)"};
  font-family: ${props => (props.icon ? "sans-serif" : props.theme.fontFamily)};
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
