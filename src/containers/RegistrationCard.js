import { connect } from 'react-redux';
import RegistrationCardComponent from '../components/Registration/RegistrationCard';
import { recordName } from '../actions/index';

const mapStateToProps = state => {
  return { myName: state.myName };
};

const mapDispatchToProps = dispatch => ({
  dispatch: (myName) => {
    dispatch(recordName(myName));
  }
});

export const RegistrationCard = connect(mapStateToProps)(RegistrationCardComponent);

// export const RegistrationCard = connect(
//   () => ({}), mapDispatchToProps, mapStateToProps)(RegistrationCardComponent);