import { fetchUser } from '@store/user';

export type HeaderStateProps = {
    firstName: string;
    lastName: string;
};

export type HeaderDispatchProps = {
    fetchUser: typeof fetchUser;
};

export type HeaderProps = HeaderStateProps & HeaderDispatchProps;
