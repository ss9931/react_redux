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