import { connect } from "react-redux";
import { selectErrors } from "../../selectors";
import { removeError } from "../../reducer";
import ErrorMessage from "./ErrorMessageComponent";

const mapStateToProps = state => ({
  errors: selectErrors(state),
});

const mapDispatchToProps = dispatch => ({
  close: timestamp => dispatch(removeError(timestamp)),
  retry: action => dispatch(action),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorMessage);
