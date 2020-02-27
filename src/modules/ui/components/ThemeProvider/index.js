import { connect } from "react-redux";
import { isRtl } from "../../selectors";
import ThemeProvider from "./ThemeProviderComponent";

const mapStateToProps = state => ({
  rtl: isRtl(state),
});

export default connect(mapStateToProps)(ThemeProvider);
