import {formReducer, ADD_KEY} from './formReducer/form.reducer' 
import {combineReducers} from 'redux'

let rootReducer = combineReducers({
    [ADD_KEY] : formReducer
})

export {rootReducer}