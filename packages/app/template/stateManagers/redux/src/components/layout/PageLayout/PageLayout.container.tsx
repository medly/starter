import { AppState } from '@store';
import { fetchUser } from '@store/user';
import { connect } from 'react-redux';
import PageLayout from './PageLayout';
import { DispatchProps, StateProps } from './types';

const mapStateToProps = ({ user }: AppState): StateProps => ({
    currentUser: user
});

const mapDispatchToProps: DispatchProps = {
    fetchUser
};

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(PageLayout);
