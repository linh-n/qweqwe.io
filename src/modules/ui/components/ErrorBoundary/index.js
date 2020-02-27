import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpiderBlackWidow } from "@fortawesome/pro-light-svg-icons/faSpiderBlackWidow";

const ErrorContainer = styled.div`
  background-color: #f0e8a2;
  padding: 20px;

  svg {
    font-size: 1.7em;
  }
`;

const ErrorDetails = styled.div`
  white-space: pre-wrap;

  .error {
    font-weight: ${props => props.theme.fontWeightBold};
    font-size: 0.9rem;
  }

  p {
    font-size: 0.8rem;
  }
`;

const environment = process.env.NODE_ENV || "development";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorContainer>
          <h2>
            <FontAwesomeIcon icon={faSpiderBlackWidow} />
          </h2>
          {environment !== "production" && (
            <ErrorDetails>
              <div className="error">{this.state.error.toString()}</div>
              <p>{this.state.errorInfo.componentStack}</p>
            </ErrorDetails>
          )}
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

ErrorBoundary.defaultProps = {
  children: null,
};

export default ErrorBoundary;
