

function reducer(state,action){
            if (typeof(state)==="undefined") {
                state=0;
            }
            switch (action.type) {
              default:{
                  break;
                }
                case "plus":{
                    state=state+1;
                    break;
                }  
                case "minus":{
                    state=state-1;
                    break;
                } 
                case "if odd plus":{
                    if(state%2===1){
                        state+=1;
                    }
                    break;
                } 
                case "async plus":{
                    state=state*3;
                } 
                
            }
            return state;
}

export default reducer;