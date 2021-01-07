const initState = {
    projects: [
        {id:1, title:'bla bla', content: 'blaaa blaaa blaaaaaa'},
        {id:2, title:'dla dla', content: 'dlaaa dlaaa dlaaaaaa'},
        {id:3, title:'cla cla', content: 'claaa claaa claaaaaa'}
    ]
}


const projectReducer = (state = initState,action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log(action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log(action.err)
            return state;
        default:
            return state;
    }
}


export default projectReducer;