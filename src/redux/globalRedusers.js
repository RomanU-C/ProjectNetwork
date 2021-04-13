const FLAG = 'FLAG';


let initialState = {
    flag: false, 
}


const globalRedusers = (state=initialState, action) => {
    switch (action.type) {
        case FLAG:
           return {
               ...state,
               flag: true
           } 
        default:
            return state;
    }
}



// action creators
export const stepOneAC = () => {
    return{type: FLAG};
};



export default globalRedusers;