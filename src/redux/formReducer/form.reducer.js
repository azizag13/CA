import {FETCH_NUMBERS, FETCH_ANS} from './form.actionTypes'

export const ADD_KEY = 'addStore'

let initialState = {
    num1: '',
    num2: '',
    num3: '',
    num4: '',
    num5: '',
    num6: '',
    ans1: '',
    ans2: '',
    ans3: ''
}

let formReducer = (state = initialState, action) =>{
    let {type, payload} = action
    switch(type){
        case FETCH_NUMBERS:
            return{
                ...state,
                ...payload
            }

            case FETCH_ANS:
                return{
                    ...state,
                    ...payload,
                   ans1:  parseFloat((+state.num1) * parseFloat(+state.num2)).toFixed(2),
                   ans2:  parseFloat((+state.num3) * parseFloat(+state.num4)).toFixed(2),
                   ans3:  parseFloat((+state.num5) * parseFloat(+state.num6)).toFixed(2)
                   
                }

               


                default: return state
    }

}

export {formReducer}