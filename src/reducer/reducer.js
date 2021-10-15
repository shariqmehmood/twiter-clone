// import AddStudents from "../screen/traner/addstudets";

export let data = {

    authUser: {},

    users: [
        {
            userName: 'haider',
            email: 'haider@gmail.com',
            password: '123sss555',
            role: 'trainer'
        },
        {
            userName: 'akram',
            email: 'akram@gmail.com',
            password: 'xse3sss555',
            role: 'student'
        },
    ],
    addStudents:[]
}






export function reducer(state, action) {
    switch (action.type) {


        case "SIGN_UP": {

            let UserClone = state.users.slice(0);
            console.log("USer", UserClone)
            UserClone.push(action.payload);
            return {
                ...state,
                users: UserClone
            }
        }

        case "SIGN_IN": {
            console.log("Auth",action.payload)
           
            return {
                ...state,
                authUser:action.payload
            
            }
        }

        case "ADD_STUDENT": {
            console.log("addStudents",action.payload)
           
            return {
                ...state,
                addStudents:action.payload
            
            }
        }


        default:
            return state;

    }


}