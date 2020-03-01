import styled from "styled-components";

export default styled.div`
  flex: 1 1 auto;
  padding: 0 ${props => props.theme.containerPadding}px;
  display: flex;

  & > * {
    flex: 1 1 auto;
  }
`;
