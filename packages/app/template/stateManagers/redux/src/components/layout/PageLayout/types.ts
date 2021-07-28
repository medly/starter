import { fetchUser, User } from '@store/user';
import { HTMLProps } from '@medly-components/utils';

export type StateProps = {
    currentUser: User;
};

export type DispatchProps = {
    fetchUser: typeof fetchUser;
};

export type Props = StateProps & DispatchProps & HTMLProps<HTMLDivElement>;
