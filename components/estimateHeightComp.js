import styles from "./idw.module.css";
import styles2 from './energyreq.module.css';
import { reducer } from "../reducer/IBWReducer";
import { defaultState } from "../defaultStates/defaultState";
import { useReducer, useState } from "react";
import HeightForm from "./forms/heightForm";

const EstimateHeightComp = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    
    const [data, setdata] = useState({
      imgsrc: "../assets/ulna.png",
      label: "Height from ulna length",
      age:0,
      sex:'',
      methodName:'ulna length',
      ulnalength:0,
      demispan:0,
      kneelength:0,
      result:0
    });

    const captureChange = (e) => {
        const { name, value, checked } = e.target;
        setdata({...data, [name]: value, result:0})
        if(checked && name==='sex') setdata({...data, sex:value, result:0})
    };

    const genResultLength = () => {
        const { age, demispan, ulnalength, kneelength,sex, methodName} = data;
        console.log(data);
        if(methodName==='ulna length'){
            if (sex==='male'){
                if(age<65){
                    let result = (79.2 +(3.6*ulnalength)).toFixed(2)
                    setdata({...data, result})
                }
                if(age>=65){
                    let result = (86.3 +(3.15*ulnalength)).toFixed(2)
                    setdata({...data, result})
                }
            }
            if (sex==='female'){
                if(age<65){
                    let result = (95.6 +(2.77*ulnalength)).toFixed(2)
                    setdata({...data, result})
                }
                if(age>=65){
                    let result = (80.4 +(3.25*ulnalength)).toFixed(2)
                    setdata({...data, result})
                }
            }
        }

        if(methodName==='demi span'){
            if (sex==='male'){
                if(age>=16&& age<=54){
                    let result = (68 +(1.3*demispan)).toFixed(2)
                    setdata({...data, result})
                }
                if(age>=55){
                    let result = (71 +(1.2*demispan)).toFixed(2)
                    setdata({...data, result})
                }
            }
            if (sex==='female'){
                if (age >= 16 && age <= 54) {
                  let result = (62 + 1.3 * demispan).toFixed(2);
                  setdata({ ...data, result });
                }
                if(age>=55){
                    let result = (67 +(1.2*demispan)).toFixed(2)
                    setdata({...data, result})
                }
            }
        }
        if(methodName==='knee length'){
            if (sex==='male'){
                if(age>=18&& age<=60){
                    let result = (71.85 +(1.88*kneelength)).toFixed(2)
                    setdata({...data, result})
                }
                if(age>60 && age<=90){
                    let result = (59.01 +(2.08*kneelength)).toFixed(2)
                    setdata({...data, result})
                }
            }
            if (sex==='female'){
                if (age >= 18 && age <= 60) {
                  let result = (67.85 + 1.87 * kneelength).toFixed(2);
                  setdata({ ...data, result });
                }
                if (age > 60 && age <= 90) {
                  let result = (62.25 + 1.91 * kneelength).toFixed(2);
                  setdata({ ...data, result });
                }
            }
        }
    };
    const switchmethods =(e)=>{
        const{name}= e.target.dataset
        if(name==='ulna'){
            setdata({
              ...data,
              imgsrc: "../assets/ulna.png",
              methodName: "ulna length",
              label: "Height from ulna length",
            });
        }
        if(name==='demi'){
            setdata({...data,
                imgsrc:"../assets/demi-span.png",
                methodName:'demi span',
                label: "Height from demi span",
            })
        }
        if(name==='knee'){
            setdata({...data,
                imgsrc:"../assets/knee_height_alt.png",
                methodName:'knee length',
                label: "Height from knee length",
            })
        }
    }
    return (
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.imgDiv}>
                <img src={data.imgsrc} alt='demispan'/>
            </div>
            <div>
                <h3>{data.label}</h3>
                <HeightForm data={data} captureChange={captureChange} genResultLength={genResultLength}/>
                {data?.result!==0 && <h4>Using {data.methodName} method, the estimated height for this {data?.age}-year-old {data.sex} is <span>{data.result} cm</span> or ({(data.result/100).toFixed(3)} m)</h4>}
                <div className={styles2.methodContainer}>
                    <p>Switch methods here</p>
                    <div id='methodBtns' className={styles2.methodList}>
                        <p data-name='ulna' onClick={switchmethods} className={styles2.kid}>Ulna length</p>
                        <p data-name='demi' onClick={switchmethods} className={styles2.kid}>Demi Span</p>
                        <p data-name='knee' onClick={switchmethods} className={styles2.kid}>Knee Height</p>
                    </div>
                </div>

                {data.methodName=='ulna length' && 
                    <>
                        <h5>To estimate height from ulna length, you'll need a tape measure.</h5>
                        <h5>Bend the patient's left arm over their chest (as shown above). Then measure from the
                        the prominent bone on the wrist down to the elbow. Note: It must be the left arm. Not the right.</h5>
                    </>
                }
                {data.methodName=='demi span' && 
                    <>
                        <h5>To estimate height from demispan, you'll need a tape measure.</h5>
                        <h5>Bend the patient's left arm over their chest (as shown above). Then measure from the
                        the prominent bone on the wrist down to the elbow. Note: It must be the left arm. Not the right.</h5>
                    </>
                }
            </div>      
        </div>
    </div>
  );
};

export default EstimateHeightComp;
