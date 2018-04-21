import { connect } from 'react-redux';
import RecentListComponent from '../components/RecentList/RecentList';

export const UserList = connect(state => ({
  users: state.users
}), {})(RecentListComponent);