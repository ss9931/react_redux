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