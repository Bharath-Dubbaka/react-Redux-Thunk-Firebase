const initState = {
    authError : null
}


const authReducer = (state = initState,action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login Fail')
            return {
                ...state,
                authError: 'Login Failed...'
            }
        case 'LOGIN_SUCESS':
           console.log('login Suces')
           return {
               ...state,
               authError: null
           }
        case 'SIGNOUT_SUCCESS':
            console.log('signout Suces')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup Suces')
            return {
                ...state,
                authError:null
            }
        case 'SIGNUP_ERROR':
            console.log('signup Erro')
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}


export default authReducer;