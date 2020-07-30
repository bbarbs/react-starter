import { takeEvery, call, put } from "redux-saga/effects";
import { DEPOSIT_REQUESTED, DEPOSIT_DONE, WITHDRAW_DONE, WITHDRAW_REQUESTED } from "../actions/actions";

export default function* watcherSaga() {
    yield takeEvery(DEPOSIT_REQUESTED, depositWorkerSaga);
    yield takeEvery(WITHDRAW_REQUESTED, withdrawWorkerSaga);
}

function* depositWorkerSaga(action) {
    yield put({ type: DEPOSIT_DONE, payload: action.payload });
}

function* withdrawWorkerSaga(action) {
    yield put({ type: WITHDRAW_DONE, payload: action.payload });
}
