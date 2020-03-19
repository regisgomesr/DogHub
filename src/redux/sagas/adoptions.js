import ActionCreators from '../actionCreators'
import { put, call } from 'redux-saga/effects'

export const createAdoption = ({ api }) => function* (action) {

    const adoption = yield call(api.createAdoption, action.adoption)
    yield put(ActionCreators.getAdoptionSuccess(adoption.data))
}

export const getAdoptions = ({ api }) => function* (action) {

    const adoptions = yield call(api.getAdoptions)
    yield put(ActionCreators.getAdoptionsSuccess(adoptions.data))
}