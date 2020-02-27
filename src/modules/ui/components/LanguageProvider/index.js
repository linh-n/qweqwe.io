import { connect } from "react-redux";
import LanguageProvider from "./LanguageProvider";
import { selectCurrentLanguage, selectCurrentLanguageMessages } from "../../selectors";

const mapStateToProps = state => ({
  language: selectCurrentLanguage(state),
  messages: selectCurrentLanguageMessages(state),
});
export default connect(mapStateToProps)(LanguageProvider);
