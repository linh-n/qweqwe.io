import styled from "styled-components";

export default styled.div`
  font-family: ${props => props.theme.fontFamily};
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 2em;
  color: rgba(255, 255, 255, 0.3);
  pointer-events: none;
`;
