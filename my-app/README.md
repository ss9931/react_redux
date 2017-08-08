# 安装react_redux

#### npm install -g create-react-app
#### create-react-app my-app
    
#### cd my-app
#### npm start
#### npm install redux --save
#### npm install react-redux --save

---

### 这是代码嘞！！！！
## App.js
    import React, { Component } from 'react';
    import Calc from './component/Calc';
    import CalcContainer from './container/CalcContainer';
    
    class App extends Component {
      constructor(props){
        super();
        
      }
      render() {
        return (
            
              <CalcContainer>
                  <Calc 
                  
                  />
              </CalcContainer>
                
        );
      }
    }
    
    export default App;
    
## CalcContainer.js

    import React from 'react';
    import Calc from '../component/Calc';
    import {connect} from 'react-redux';
    
    const mapStoreToProps=(state,ownProps)=>{
        return{
            number:state
        }
    }
    const mapDispatchToProps=((dispatch,ownProps)=>{
        return{
            onPlus:()=>{
          dispatch({
                type:"plus"
            });
      },
    
      onMinus:()=>{
          dispatch({
                type:"minus"
            });
      },
    
        onIf:()=>{
          dispatch({
                type:"if odd plus"
            });
      },
    
        onAsync:()=>{
          dispatch({
                type:"async plus"
            });
      }
    
    
        }
         
    })
    
    
    let CalcContainer=connect(mapStoreToProps,mapDispatchToProps)(Calc);
    
    export default CalcContainer;
    
## Calc.js
    
    import React from 'react';

    const Calc = (props) => {
    let{number,onPlus,onMinus,onIf,onAsync}=props;

    return (
        <div>
            <span id="span">{number}</span>
            <br/>

            <input id="btn1" type="button" value="plus" onClick={onPlus}/>
            <input id="btn2" type="button" value="minus" onClick={onMinus}/>
            <input id="btn3" type="button" value="if odd plus" onClick={onIf}/>
            <input id="btn4" type="button" value="async plus" onClick={onAsync}/>
        </div>
        );
    };
    
    export default Calc;
    
## index.js

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