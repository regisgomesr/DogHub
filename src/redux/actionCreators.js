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
    getBreedFailure: null,

    getAdoptionsRequest: null,
    getAdoptionsSuccess: ['adoptions'],
    getAdoptionsFailure: null,

    createAdoptionRequest: ['adoption'],
    createAdoptionSuccess: ['adoption'],
    createAdoptionFailure: ['error'],
    createAdoptionReset: null,

 

})
export default Creators