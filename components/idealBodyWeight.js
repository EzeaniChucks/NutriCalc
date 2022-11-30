import {useReducer} from 'react'
import IDWFORM from "./forms/IDWform";
import IDWFormKids from "./forms/IWDFormKids";
import styles from "./idw.module.css";
import { reducer } from '../reducer/IBWReducer';

const defaultState ={
    index:0,
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
    error:'',
    errorAdult:''
}

const IdealBodyWeight =()=>{
    const [state, dispatch] = useReducer(reducer, defaultState);

    const captureChange =(e)=>{
        const {name, value, checked, selectedIndex} = e.target
        if(name==='childage') dispatch({type:'CLEAR_ADULT_VALS'})
        if(name==='age') dispatch({type:'CLEAR_CHILD_VALS'})
        dispatch({type:'GENERAL_CHANGE', payload:{value, name, checked, selectedIndex}})
        dispatch({type:'CLEAR_RESULT'})
    }

    const genResultKid =()=>{
        // console.log(document.querySelector('#childageid').options[state.index]);
        const { childage, childageindicator } = state;
        let idwKid = 0
         if(childage>11 && childageindicator==='month') {
            return dispatch({type:'ERROR', payload:`Instead of ${childage} months, enter age as ${Math.floor(childage/12)} year(s) and try again`})
        }
        if(childage>=18 && childageindicator==='year') {
            return dispatch({type:'ERROR', payload:`This calculator is meant for people up to 17yrs old. Use the calculator above for adults instead`})
        }
        if(childage==0 && childageindicator==='year') {
            return dispatch({type:'ERROR', payload:`Age in years should NOT be zero. Set the unit to 'month' and try again`})
        }

        if(childage<=11 && childageindicator==='month') {
            idwKid = (Number(childage)+7)/2;
            return dispatch({ type: "GEN_RESULT_CHILD", payload: idwKid });
        }
        if(childage>=1 && childage<=5 && childageindicator==='year') {
            idwKid = 2*(Number(childage)+5)
            return dispatch({ type: "GEN_RESULT_CHILD", payload: idwKid });
        }
        if(childage>=5 && childage<=14 && childageindicator==='year') {
            idwKid = 4*(Number(childage))
            return dispatch({ type: "GEN_RESULT_CHILD", payload: idwKid });
        }
    }
    const genResult =()=>{
        const {sex, height, age} = state;
        let idwAdult= 0;
        if(age<18) return dispatch({type:'ERRORADULT', payload:`This calculator is meant for people older than 18. Enter a higher age value. Or use the calculator below (for children) instead`})
        if(age==0||height==0) return dispatch({type:'ERRORADULT', payload:`Age or Height can't be zero`})
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
            <div className={styles.container}>
               <p>Ideal Body Weight</p>
                <div>
                    <h3>For Adults (18years or older)</h3>
                    <IDWFORM data={state} captureChange={captureChange} genResult={genResult}/>
                    {state.resultAdult>0&&
                    (<>
                        <h4>Your Ideal Weight is: <span>{state.resultAdult.toFixed(1)} kg</span></h4>
                        <h4>A BMI of: <span>{(state.resultAdult/state.height**2).toFixed(2)} kg/m<sup>2</sup></span> is recommended for you</h4>
                    </>)}
                    <h4 className={styles.error}>{state.errorAdult}</h4>
                </div>
                <hr/>
                <div>
                    <h3>For Children (younger than 18)</h3>
                    <IDWFormKids data={state} captureChange={captureChange} genResultKid={genResultKid}/>
                    {state.childresult>0&&<h4> {state.childage}-{state.childageindicator} old children should have an ideal body weight of <span>{state.childresult} kg</span></h4>}
                    <h4 className={styles.error}>{state.error}</h4>
                </div> 
            </div>
      </section>
    )
}

export default IdealBodyWeight;