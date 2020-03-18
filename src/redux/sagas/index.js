import { takeLatest, all } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import { getBreeds, getBreed } from './breeds'
import { createAdoption } from './adoptions'

import Api from '../../services/Api'

export default function* rootSaga() {

    const baseURL = 'http://localhost:3000'
    const api = new Api(baseURL)

    yield all([
        takeLatest(Types.GET_BREEDS_REQUEST, getBreeds({ api })),
        takeLatest(Types.GET_BREED_REQUEST, getBreed({ api })),
        takeLatest(Types.CREATE_ADOPTION_REQUEST, createAdoption({ api })),
    ])
}