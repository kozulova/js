import {ADD_CHOSEN_OPTION} from './actions';
import {START_GAME} from './actions';

const initialState = {
    options: [
        {id: 0, name: "paper"}, 
        {id: 1, name: "rock"}, 
        {id: 2, name: "scissors"} 
      ],
    chosenOptions: {
        gamerOption: "",
        computerOption: "",
        gameResult: "",
    },
    isGame: true,    
    score: 0,
}

function reducer(state=initialState, action){
    switch(action.type){
        case ADD_CHOSEN_OPTION:
            console.log(state);
            return {
                ...state,
                score: action.chosenOptions.gameResult==="win" ? state.score+1: state.score,
                isGame: false,
                chosenOptions: action.chosenOptions
            }  
        case START_GAME:
            return{
                ...state,
                isGame: action.isGame
            }        
        default: 
        return state;    
    }

}

export default reducer;