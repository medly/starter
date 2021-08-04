import { userSaga } from '@store/user';
import { all } from 'redux-saga/effects';

export function* rootSaga(): Generator {
    yield all([userSaga()]);
}
