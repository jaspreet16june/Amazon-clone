export const initialState = {
    basket:[],
    user:null,
}

const reducer=(state,action)=>{

    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic for adding items to the basket 
            return {state}
             
        case 'REMOVE_TO_BASKET':
            //logic for removing from the basket
            return {state}
       
        default:
            return state;
    }
}
export default reducer;