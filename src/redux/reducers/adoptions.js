import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

// Redux para manipular as Adoções - adoptions
export const INITIAL_STATE = {
    isLoading: false,
    isSaving: false,
    saved: false,
    data: [],
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


export const HANDLERS = {
    [Types.CREATE_ADOPTION_REQUEST]: createAdoptionRequest,
    [Types.CREATE_ADOPTION_SUCCESS]: createAdoptionSuccess,
    [Types.CREATE_ADOPTION_FAILURE]: createAdoptionFailure,

}
export default createReducer(INITIAL_STATE, HANDLERS)