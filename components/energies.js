import styles from './energyreq.module.css';
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import KcalcForm from './forms/KcalcForm';

import { IofM } from '../utils/prepareData/instituteOfMedicine';
import { Hb } from '../utils/prepareData/harrisBenedict';
import {msj} from '../utils/prepareData/mifflin-st-jeor';
import {Scho} from '../utils/prepareData/schofield';
import {ho} from '../utils/prepareData/henryOxford';

import { IoMCalc } from '../utils/calculator/IoMCalc';
import { hbCalc } from '../utils/calculator/hbCalc';
import {msjCalc} from '../utils/calculator/msjCalc';
import { hoCalc } from '../utils/calculator/hoCalc';
import {schoCalc} from '../utils/calculator/schocalc'

const Energ =()=>{
    const router = useRouter()
    const [data, setdata] = useState({
        methodName:'Harris-Benedict',
        sex:'',
        age:0,
        height: 0,
        weight: 0,
        PALevels:1.2,
        bmrResult: 0,
        kcalResult:0,
        index:0,
        PAinfo:'sedentary',
        errorInfo:'',
        warningInfo:'',
        SEE:0,
    })

    const [Pvals, setPVals] = useState({
        sedentary:1.2,
        lightlyActive:1.375,
        moderatelyActive:1.55,
        extraActive:1.725,
        extremelyActive:0,
    })
    
    const calcKilocal =()=>{
        console.log(data.PALevels)
        console.log(data)
        console.log(Pvals)
        const {weight, height, age, sex, methodName} = data
        
        //validators
        if(!sex) return setdata({...data, errorInfo: `Specify client's sex`})
        if(age<=0||height<=0||weight<=0) return setdata({...data, errorInfo:`Values can't be zero or less`})
        if(height>2.5) return setdata({...data, errorInfo:`Most likely, your height is entered in centimeters or other units. Enter height in meters to continue`})
        if(age<18) return setdata({...data, errorInfo:`This section isn't ideal for calculating requirements of people less than 18. Visit our Home page for the more appropriate (paediatrics) calculator`})
        if(age>=18) setdata({...data, errorInfo:``})
        
        //calculators for equation methods chosen
        if(methodName ==='Institute of medicine'){
           IoMCalc({data, setdata})
        }
        if(methodName ==='Henry Oxford'){
           hoCalc({data, setdata})
        }
        if(methodName ==='Schofield'){
           schoCalc({data, setdata})
        }
        if(methodName ==='Mifflin St. Jeor'){
           msjCalc({data, setdata})
        }
        if(methodName === 'Harris-Benedict'){
            hbCalc({data, setdata})
        } 
    }
    
    const captureChnage =(e)=>{
        const {value, name, checked, selectedIndex, options} = e.target
        setdata({...data, [name]:value, kcalResult:0})

        if(checked===true && name==='sex'){
            setdata({...data, sex:value, kcalResult:0})
        };
        if (name === "physical-act") {
            const optionText = options[selectedIndex].textContent //selects text from the active html select tag option
            setdata({ ...data, PAinfo: optionText, PALevels: value, index:selectedIndex, kcalResult:0 });        
        }
        

        setdata((prev)=>{//get access to current onchange data
            if(data.methodName === 'Institute of medicine'){
                IofM({prev, setPVals, Pvals}) //prepare relevant data for execution
            }
            if(data.methodName === 'Schofield'){
                Scho({prev, setPVals, Pvals}) //prepare relevant data for execution
            }
            if(data.methodName === 'Henry Oxford'){
                ho({prev, setPVals, Pvals}) //prepare relevant data for execution
            }
            if(data.methodName === 'Mifflin St. Jeor'){
                msj({prev, setPVals, Pvals}) //prepare relevant data for execution
            }
            if(data.methodName === "Harris-Benedict") {
                Hb({prev, setPVals, Pvals});
            }
            return prev
        })
    }

    const handleIM =(e)=>{
        setdata({...data, methodName:e.target.textContent, warningInfo:'', errorInfo:''})
        setdata((prev)=>{
            IofM({prev, setPVals, Pvals})
            return prev
        })
    }

    const handleHB =(e)=>{//gets called when alternative methods are clicked.
        //the aim is to set the methodName to the clicked's textContent and use that throughout the app
        setdata({...data, methodName:e.target.textContent, warningInfo:'', errorInfo:''})
        setdata((prev)=>{
            Hb({prev, setPVals, Pvals})
            return prev;
        })
        
    }
    const handleHO=(e)=>{
        setdata({...data, methodName:e.target.textContent, warningInfo:'', errorInfo:''})
        setdata((prev)=>{
            ho({prev, setPVals, Pvals})
            return prev;
        })
    }
    const handleMST=(e)=>{
        setdata({...data, methodName:e.target.textContent, warningInfo:'', errorInfo:''})
        setdata((prev)=>{
            msj({prev, setPVals, Pvals})
            return prev;
        })
    }
    const handleSCHO=(e)=>{
        setdata({...data, methodName:e.target.textContent, warningInfo:'', errorInfo:''})
        setdata((prev) => {
            Scho({ prev, setPVals, Pvals });
            return prev;
        });
    }
    const handleCUNN=()=>{

    }

    useEffect(()=>{
      const methods = document.querySelectorAll(`.${styles.kid}`);
      methods.forEach((method) => {
        return method.classList.remove(`${styles.active}`);
      });
      methods.forEach((method) => {
        if (method.textContent === data.methodName) {
          return method.classList.add(`${styles.active}`);
        }
      });
      //   proammatically set the value of select html tag as value of current PAlevel
        if (data.index<4) {
            const sele =document.querySelector("#selectTagPa").options[data.index].value;
            document.querySelector("#selectTagPa").value = sele;
            setdata({ ...data, PALevels: sele });
            console.log(sele);
        }
        if(data.index>=4){
            setdata({...data, index:4})
            setdata((prev)=>{
                prev.index = 3
                const sele =document.querySelector("#selectTagPa").options[prev.index].value;
                document.querySelector("#selectTagPa").value = sele;
                prev.PALevels= sele;
                return prev
            })
        }
    }, [data?.sex, data?.age, data?.weight, data?.height, data?.methodName, data.index])
    

    useEffect(()=>{
        if (data?.kcalResult!==0){
             document.getElementById('gen-result-btn').click()
        }
    },[data?.methodName, data?.kcalResult])
    
    return (
      <main className={styles.main}>
        <div>
            <p>energy requirement</p>
            <KcalcForm data={data} setdata={setdata} calcKilocal={calcKilocal} captureChnage={captureChnage} Pvals={Pvals}/>
            <div className={styles.otherArea}>
                <h4>You're using the <span> {data?.methodName}</span> formula</h4>
                {data?.kcalResult !==0 && (
                    <>
                    <p className={styles.result}>
                        your BMR is {data?.bmrResult ===0? 'not available using this formula': <span>{`${Math.ceil(data?.bmrResult)} kcal`}</span>}</p>
                        <p className={styles.result}>Kilocalorie requirement is <span>{Math.ceil(data?.kcalResult)} kcal</span></p>
                        <p className={styles.result}>Physical activity level is {data?.PAinfo}</p>
                    </>)
                }
                
                {data?.errorInfo&&
                <p className={styles.errorInf}>{data?.errorInfo}</p>
                }
                {data?.warningInfo&&
                    <p className={styles.warningInf}>NOTE: {data?.warningInfo}</p>
                }
                <div className={styles.methodContainer}>
                    <p>Compare results with other formualae</p>
                    <div id='methodBtns' className={styles.methodList}>
                        <p id='methodBtnIM' className={styles.kid} onClick={handleIM}>Institute of medicine</p>
                        <p className={styles.kid} onClick={handleHO}>Henry Oxford</p>
                        <p className={styles.kid} onClick={handleMST}>Mifflin St. Jeor</p>
                        <p className={styles.kid} onClick={handleSCHO}>Schofield</p>
                        <p className={styles.kid} onClick={handleCUNN}>Cunningham</p>
                        <p className={styles.kid} onClick={handleHB}>Harris-Benedict</p>
                        <h6>Which of these formualae is best?</h6>
                        <h6>Which one perfectly fits into your needs?</h6>
                        <h6 onClick={()=>router.push('/faq')}>Visit our Frequently Asked Questions section</h6>
                    </div>
                </div>
            </div>
        </div>
      </main>
    );
}

export default Energ;