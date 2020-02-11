import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

// Redux para manipular as Raças - Breeds
export const INITIAL_STATE = {
    isLoading: false,
    data: [],
    breed: {}
}
export const getBreedsRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true
    }
}
export const getBreedsSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        data: action.breeds
    }
}
export const getBreedsFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false
    }
}

export const getBreedRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true
    }
}
export const getBreedSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        breed: action.breed
    }
}
export const getBreedFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false
    }
}

export const HANDLERS = {
    [Types.GET_BREEDS_REQUEST]: getBreedsRequest,
    [Types.GET_BREEDS_SUCCESS]: getBreedsSuccess,
    [Types.GET_BREEDS_FAILURE]: getBreedsFailure,

    [Types.GET_BREED_REQUEST]: getBreedRequest,
    [Types.GET_BREED_SUCCESS]: getBreedSuccess,
    [Types.GET_BREED_FAILURE]: getBreedFailure
}
export default createReducer(INITIAL_STATE, HANDLERS)