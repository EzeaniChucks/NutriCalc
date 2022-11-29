import {useReducer} from 'react'
import IDWFORM from "./forms/IDWform";
import IDWFormKids from "./forms/IWDFormKids";
import styles from "./idw.module.css";

const defaultState ={
    height:0,
    age:0,
    sex:'',
    resultAdult:0,
    childheight:0,
    childage:0,
    childgender:'',
    childresult:0,
    childageindicator:'month',
    childheightindicator:'cm',
    warning:'',
    error:''
}
const reducer =(state, {payload, type})=>{
    if (type ==='GENERAL_CHANGE'){
        if(payload.checked && payload.name ==='sex'){
            return {...state, [payload.name]:payload.value}
        }
        if(payload.checked && payload.name ==='childgender'){
            return {...state, [payload.name]:payload.value}
        }
        return {...state, [payload.name]:payload.value}
    }
    if(type ==='GEN_RESULT'){
        return {...state, resultAdult:payload, error:''}
    }
    if(type ==='GEN_RESULT_CHILD'){
        return {...state, childresult:payload, error:''}
    }
    if(type ==='CLEAR_RESULT'){
        return {...state, resultAdult:0, childresult:0}
    }
    if(type ==='CLEAR_ADULT_VALS'){
        return {...state, age:0, sex:'',height:0, resultAdult:0}
    }
    if(type ==='CLEAR_CHILD_VALS'){
        return {...state, childage:0, childheight:0, childgender:'', childageindicator:'months', childheightindicator:'cm', childresult:0}
    }
    if(type==='ERROR'){
        return {...state, error:payload}
    }
    throw Error('Action type does not exist');
}

const IdealBodyWeight =()=>{
    const [state, dispatch] = useReducer(reducer, defaultState);

    const captureChange =(e)=>{
        const {name, value, checked} = e.target
        if(name==='childage') dispatch({type:'CLEAR_ADULT_VALS'})
        if(name==='age') dispatch({type:'CLEAR_CHILD_VALS'})
        dispatch({type:'GENERAL_CHANGE', payload:{value, name, checked}})
        dispatch({type:'CLEAR_RESULT'})
    }

    const genResult =()=>{
        const {sex, height, childage, childageindicator} = state;
        
        let idwAdult= 0;
    
        if(childage>11 && childageindicator==='month') {
            return dispatch({type:'ERROR', payload:`enter ${childage} months as ${Math.floor(childage/12)}year(s) and try again`})
        }
        if(childage>=18 && childageindicator==='year') {
            return dispatch({type:'ERROR', payload:`This calculator is meant for people younger than 18. Enter a lower age value. Or use the first calculator (for adults) instead`})
        }

        if(childage<=11 && childageindicator==='month') {
            idwAdult = (Number(childage)+9)/2;
            return dispatch({ type: "GEN_RESULT_CHILD", payload: idwAdult });
        }
        if(childage>=1 && childage<=5 && childageindicator==='year') {
            idwAdult = 2*(Number(childage)+5)
            return dispatch({ type: "GEN_RESULT_CHILD", payload: idwAdult });
        }
        if(sex ==='male'){
            idwAdult = 50 + (0.91 *(height*100-152.4))
        }
        if(sex ==='female'){
            idwAdult = 45.5 + (0.91*(height*100-152.4))
        }
        dispatch({type:'GEN_RESULT', payload:idwAdult})
    }
    return(
        <section className={styles.main}>
            <div>
                <h3>For Adults (18years and above)</h3>
                <IDWFORM data={state} captureChange={captureChange} genResult={genResult}/>
                {state.resultAdult>0&&
                (<>
                    <h4>Your Ideal Weight is: <span>{state.resultAdult.toFixed(1)} kg</span></h4>
                    <h4>A BMI of: <span>{(state.resultAdult/state.height**2).toFixed(2)} kg/m<sup>2</sup></span> is recommended for you</h4>
                </>)}
            </div>
            <hr/>
            <div>
                <h3>For Children (less than 18years)</h3>
                <IDWFormKids data={state} captureChange={captureChange} genResult={genResult}/>
                {state.childresult>0&&<h4> {state.childage}-{state.childageindicator} old children should have an ideal body weight of <span>{state.childresult} kg</span></h4>}
                <h4 className={styles.error}>{state.error}</h4>
            </div>
      </section>
    )
}

export default IdealBodyWeight;