import { AppState } from '@store';
import { fetchUser } from '@store/user';
import { connect } from 'react-redux';
import { Header } from './Header';
import { HeaderDispatchProps, HeaderStateProps } from './types';

const mapStateToProps = ({ user }: AppState): HeaderStateProps => ({
    firstName: user?.firstName,
    lastName: user?.lastName
});

const mapDispatchToProps: HeaderDispatchProps = {
    fetchUser
};

export default connect<HeaderStateProps, HeaderDispatchProps>(mapStateToProps, mapDispatchToProps)(Header);
