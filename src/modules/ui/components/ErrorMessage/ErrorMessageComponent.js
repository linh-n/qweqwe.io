import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Transition } from "react-spring/renderprops";
import { FormattedMessage } from "react-intl";

import Container from "modules/shared-components/Container";
import rtl from "utils/rtl";

const Panel = styled.div`
  position: fixed;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 101;
  background: #f0e8a2;
  height: 30px;
  overflow: hidden;
`;

const Error = styled.div`
  width: 100%;
  padding: 5px 0;
  text-align: center;

  button {
    border: 0;
    background: transparent;
    font-weight: ${props => props.theme.fontWeightBold};
    cursor: pointer;
    text-decoration: underline;
    padding: 0;
    ${rtl("margin-left: 1em;")};
  }
`;

const ErrorMessage = ({ errors, close, retry }) => (
  <Transition
    items={errors}
    keys={err => err.timestamp}
    from={{ height: 0 }}
    enter={{ height: 30 }}
    leave={{ height: 0 }}
  >
    {err => animatingProps => (
      <Panel style={{ ...animatingProps }}>
        <Container>
          <Error>
            <FormattedMessage id={err.message} />
            {err.retryAction && (
              <button
                onClick={() => {
                  close(err.timestamp);
                  retry(err.retryAction);
                }}
              >
                <FormattedMessage id="error.retry" defaultMessage="Retry" />
              </button>
            )}
            <button
              onClick={() => {
                close(err.timestamp);
              }}
            >
              <FormattedMessage id="error.close" defaultMessage="Close" />
            </button>
          </Error>
        </Container>
      </Panel>
    )}
  </Transition>
);

ErrorMessage.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      timestamp: PropTypes.number,
    })
  ).isRequired,
  close: PropTypes.func.isRequired,
  retry: PropTypes.func.isRequired,
};

export default ErrorMessage;
