const initState ={
    game:{platforms:[]},
    screen:{results:[]},
    isLoading:true
}

const detailReducer = (state=initState, action)=>{
    switch(action.type){
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading:true
            }
        case "GET_DETAIL":
            return {
                ...state, 
                game:action.payload.game,
                screen:action.payload.screen,
                isLoading:false
            }
        default:
            return {...state}
    }
}

export default detailReducer