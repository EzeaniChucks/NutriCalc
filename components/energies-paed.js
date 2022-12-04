import styles from "./energyreq.module.css";
import KcalFormKids from "./forms/KcalFormKids";
import{useReducer} from 'react';
import {useRouter} from 'next/router'
import { defaultState } from "../defaultStates/defaultState.js";
import { reducer } from "../reducer/IBWReducer.js";

const EnergyPaedComp = () => {  
  const [state, dispatch] = useReducer(reducer,defaultState)
  const router = useRouter();
  
  const captureChange = (e) => {
    const { name, value, checked, selectedIndex } = e.target;
    dispatch({
      type: "GENERAL_CHANGE",
      payload: { value, name, checked, selectedIndex },
    });
    dispatch({ type: "CLEAR_RESULT" });
  };

  const genResultKid = () => {
    const { childage, childageindicator, childweight } = state;
    let idwKid = 0;
    if(childweight ==0){
      return dispatch({type: "ERROR", payload: `Weight cannot be zero`,
      });
    }
    if (childage > 11 && childageindicator === "month") {
      return dispatch({type: "ERROR", payload: `Instead of ${childage} months, enter age as ${Math.floor(childage / 12)} year(s) and try again`,
      });
    }
    if (childage >= 18 && childageindicator === "year") {
      return dispatch({type: "ERROR", payload: `This calculator is meant for people up less than 18. Go back to our Home Page and choose the calcultor for adults`,
      });
    }
    if (childage == 0 && childageindicator === "year") {
      return dispatch({type: "ERROR", payload: `Age in years should NOT be zero. Set the unit to 'month' and try again`,
      });
    }

    if (childage <= 11 && childageindicator === "month") {
      idwKid = (90*Number(childweight)).toFixed(0);
      return dispatch({ type: "GEN_RESULT_CHILD", payload: idwKid });
    }
    if (childage >= 1 && childage <= 3 && childageindicator === "year") {
      idwKid = (80 * (Number(childweight))).toFixed(1);
      return dispatch({ type: "GEN_RESULT_CHILD", payload: idwKid });
    }
    if (childage > 3 && childage <= 5 && childageindicator === "year") {
      idwKid = (70 * Number(childweight)).toFixed(1);
      return dispatch({ type: "GEN_RESULT_CHILD", payload: idwKid });
    }
    if (childage > 5 && childage <= 8 && childageindicator === "year") {
      idwKid = (63 * Number(childweight)).toFixed(1);
      return dispatch({ type: "GEN_RESULT_CHILD", payload: idwKid });
    }
    if (childage > 8 && childage<= 13 && childageindicator === "year") {
      idwKid = (38 * Number(childweight)).toFixed(1);
      return dispatch({ type: "GEN_RESULT_CHILD", payload: idwKid });
    }
    if (childage > 13 && childage<=17 && childageindicator === "year") {
      idwKid = (42 * Number(childweight)).toFixed(1);
      return dispatch({ type: "GEN_RESULT_CHILD", payload: idwKid });
    }
  };
  return (
    <div className={styles.main}>
      <div>
        <p>Paediatric energy requirement</p>
        <KcalFormKids data={state} captureChange={captureChange} genResultKid={genResultKid}/>
        <div className={styles.otherArea}>
          {/* {state?.errorInfo && (
            <p className={styles.errorInf}>{state?.errorInfo}</p>
          )} */}
          {state.childresult>0&&
            <>
            <h4 className={styles.result}> {state.childage}-{state.childageindicator} old children (weighing {state.childweight} kg) should have an energy requirement of <span>{state.childresult} kcal</span></h4>
            <h4 className={styles.extraInf}>To get this child's ideal calorie for age, use their ideal body weight (as opposed to their actual weight). To get paediatric ideal weight, click <span onClick={()=>router.push('/ideal-body-weight')}>here</span></h4>
          </>}
          <h4 className={styles.errorInf}>{state.error}</h4>
        </div>
      </div>
    </div>
  );
};

export default EnergyPaedComp;
