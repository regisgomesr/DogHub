import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({

    getBreedsRequest: null,
    getBreedsSuccess: ['breeds'],
    getBreedsFailure: null,

    getBreedRequest: ['id'],
    getBreedSuccess: ['breed'],
    getBreedFailure: null

})
export default Creators