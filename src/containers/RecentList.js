import { connect } from 'react-redux';
import RecentListComponent from '../components/RecentList/RecentList';

const mapStateToProps = state => {
   return { users: state.users };
};

export const UserList = connect(mapStateToProps)(RecentListComponent);