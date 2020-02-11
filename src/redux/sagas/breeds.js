import ActionCreators from '../actionCreators'
import { put, call } from 'redux-saga/effects'

export const getBreeds = ({ api }) => function* (action) {

    const breeds = yield call(api.getBreeds)
    yield put(ActionCreators.getBreedsSuccess(breeds.data))
}

export const getBreed = ({ api }) => function* (action) {
    
    const breed = yield call(api.getBreed, action.id) 
    yield put(ActionCreators.getBreedSuccess(breed.data))
}