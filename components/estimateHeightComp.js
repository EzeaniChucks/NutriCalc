import styles from "./idw.module.css";
import styles2 from './energyreq.module.css';
import { useEffect, useReducer, useState } from "react";
import HeightForm from "./forms/heightForm";

const EstimateHeightComp = () => {
    
    const [data, setdata] = useState({
      imgsrc: "../assets/ulna.png",
      label: "Height from ulna length",
      age:0,
      sex:'',
      methodName:'ulna length',
      ulnalength:0,
      demispan:0,
      kneelength:0,
      error:'',
      warning:'',
      result:0
    });

    const captureChange = (e) => {
        const { name, value, checked } = e.target;
        setdata({...data, [name]: value, result:0})
        if(checked && name==='sex') setdata({...data, sex:value, result:0})
    };

    const genResultLength = () => {
        const { age, demispan, ulnalength, kneelength,sex, methodName} = data;
        if(sex==''|| age==0 || age==''){
            return setdata({...data, error:`Set gender and age`})
        }
        if(methodName==='ulna length'){
            if(ulnalength ==0){
                return setdata({...data, error:`Ulna length can't be zero`})
            }
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
            if(age<16){
                return setdata({...data, error:`This method isn't suitable for people younger than 16 years. Try the ulna length method`})
            }
            if(demispan ==0){
                return setdata({...data, error:`Demi span can't be zero`})
            }
            if (sex==='male'){
                if(age>=16&& age<=54){
                    let result = (68 +(1.3*demispan)).toFixed(2)
                    setdata({...data, result, error:''})
                }
                if(age>=55){
                    let result = (71 +(1.2*demispan)).toFixed(2)
                    setdata({...data, result, error:''})
                }
            }
            if (sex==='female'){
                if (age >= 16 && age <= 54) {
                  let result = (62 + 1.3 * demispan).toFixed(2);
                  setdata({ ...data, result, error:''});
                }
                if(age>=55){
                    let result = (67 +(1.2*demispan)).toFixed(2)
                    setdata({...data, result, error:''})
                }
            }
        }
        if(methodName==='knee length'){
            if (kneelength ==0){
                return setdata({...data, error:`Knee length can't be zero`})
            }
            if (age<18){
                return setdata({...data, error:`This method isn't suitable for people younger than 18. Try the ulna length method`})
            }
            if (age>90){
                return setdata({...data, error:`This method isn't suitable for people older than 90. Try the ulna length or demiSpan method`})
            }
            
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
        const{name}= e.target.dataset;
        if(name==='ulna'){
            setdata({
              ...data,
              imgsrc: "../assets/ulna.png",
              methodName: "ulna length",
              label: "Height from ulna length",
              result:0,
              error:''
            });
        }
        if(name==='demi'){
            setdata({...data,
                imgsrc:"../assets/demi-span.png",
                methodName:'demi span',
                label: "Height from demi span",
                result:0,
                error:''
            })
        }
        if(name==='knee'){
            setdata({...data,
                imgsrc:"../assets/knee_height_alt.png",
                methodName:'knee length',
                label: "Height from knee length",
                result:0,
                error:''
            })
        }
    }
    useEffect(()=>{
        const methodList = document.querySelectorAll(`.${styles2.kid}`)
        methodList.forEach((element)=>{
            return element.classList.remove(`${styles2.active}`);
        })
        methodList.forEach(element => {
            if(element.textContent.toLowerCase() === data.methodName){
                return element.classList.add(`${styles2.active}`);
            };
        });
    })
    return (
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.imgDiv}>
                <img src={data.imgsrc} alt='demispan'/>
            </div>
            <div>
                <h3>{data.label}</h3>
                <HeightForm data={data} captureChange={captureChange} genResultLength={genResultLength}/>
                {data?.error&& <h4 className={styles.error}>{data.error}</h4>}
                {data?.result!==0 && <h4>Using the {data.methodName} method, the estimated height for {data?.age}-year-old {data.sex}s is <span>{data.result} cm</span> or <span>({(data.result/100).toFixed(3)} m)</span></h4>}
                <div className={styles2.methodContainer}>
                    <p>Switch methods here</p>
                    <div id='heightMethodBtns' className={styles2.methodList}>
                        <p data-name='ulna' onClick={switchmethods} className={styles2.kid}>Ulna length</p>
                        <p data-name='demi' onClick={switchmethods} className={styles2.kid}>Demi Span</p>
                        <p data-name='knee' onClick={switchmethods} className={styles2.kid}>Knee Length</p>
                    </div>
                </div>

                {data.methodName=='ulna length' && 
                    <>
                        <h5>You're currently using the <span>{data.methodName}</span> method, appropriate for people of all ages. To estimate height from ulna length, you'll need a tape measure.</h5>
                        <h5>Bend the patient's left arm over their chest (as shown above). Then measure from the
                        the prominent bone on the wrist down to the elbow. Note: It must be the left arm. Not the right.</h5>
                    </>
                }
                {data.methodName=='demi span' && 
                    <>
                        <h5>You're currently using the <span>{data.methodName}</span> method, appropriate for people aged 16 and above. To estimate height from demispan, you'll need a tape measure.</h5>
                        <h5>The patient may sit on a chair or lie on their backs. Stretch the right arm as shown in the diagram above.
                            The tape is placed between the middle and ring finger and runs smoothly along the arm. The mesurement is taken from between the fingers
                            to the sternal notch above the chest.
                        </h5>
                    </>
                }
                {data.methodName=='knee length' && 
                    <>
                        <h5>You're currently using the <span>{data.methodName}</span> method, appropriate for people aged 18 to 90. To estimate height from demispan, you'll need a tape measure.</h5>
                        <h5>To measure knee height, the knee should be bent at 90 degrees to the ankle (as shown above).
                            Measure from the top of the thighs to the base of the feet (as if the feet were placed flat on the floor)
                        </h5>
                    </>
                }
            </div>      
        </div>
    </div>
  );
};

export default EstimateHeightComp;
