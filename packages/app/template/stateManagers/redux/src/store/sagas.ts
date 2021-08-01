import { all } from 'redux-saga/effects';
import { userSaga } from '@store/user';

export function* rootSaga(): Generator {
    yield all([
        userSaga()
    ]);
}
