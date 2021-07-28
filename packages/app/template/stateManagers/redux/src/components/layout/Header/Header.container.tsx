import { AppState } from '@store';
import { connect } from 'react-redux';
import Header from './Header';
import { StateProps } from './types';

const mapStateToProps = ({ user }: AppState): StateProps => ({
    firstName: user?.firstName,
    lastName: user?.lastName
});

export default connect<StateProps, {}>(mapStateToProps, {})(Header);
