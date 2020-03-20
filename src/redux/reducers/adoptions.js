import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

// Redux para manipular as Adoções - adoptions
export const INITIAL_STATE = {
    isLoading: false,
    isSaving: false,
    saved: false,
    data: [],
    adoption: {},
    error: ''
}


export const createAdoptionRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
        saved: false,
    }
}

export const createAdoptionSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: true,
        error: ''
    }
}

export const createAdoptionFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false,
        error: true
    }
}

export const createAdoptionReset = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false,
        error: ''
    }
}

export const getAdoptionsRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true
    }
}
export const getAdoptionsSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        data: action.adoptions
    }
}
export const getAdoptionsFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false
    }
}


export const HANDLERS = {
    [Types.CREATE_ADOPTION_REQUEST]: createAdoptionRequest,
    [Types.CREATE_ADOPTION_SUCCESS]: createAdoptionSuccess,
    [Types.CREATE_ADOPTION_FAILURE]: createAdoptionFailure,
    [Types.CREATE_ADOPTION_RESET]: createAdoptionReset,

    [Types.GET_ADOPTIONS_REQUEST]: getAdoptionsRequest,
    [Types.GET_ADOPTIONS_SUCCESS]: getAdoptionsSuccess,
    [Types.GET_ADOPTIONS_FAILURE]: getAdoptionsFailure

}
export default createReducer(INITIAL_STATE, HANDLERS)