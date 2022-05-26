import { createUserAPI} from '../../api/index'
import { CREATE_USER} from '../types'
import { takeEvery } from 'redux-saga/effects'

export function* createUserSaga(action) {
    yield createUserAPI(action.user)
}

export function* watchUsersAsync() {
    yield takeEvery(CREATE_USER, createUserSaga)
}