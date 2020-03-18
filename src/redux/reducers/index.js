import { combineReducers } from 'redux'

import breeds from './breeds'
import adoptions from './adoptions'

const rootReducer = combineReducers({
    breeds,
    adoptions
})
export default rootReducer