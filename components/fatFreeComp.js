import styles from "./idw.module.css";
import styles2 from "./energyreq.module.css";
import { useEffect, useState } from "react";
// import HeightForm from "./forms/heightForm";
import FatMassForm from "./forms/FatMassForm";

const FatFreeComp = () => {
  const [data, setdata] = useState({
    age: 0,
    sex: "",
    height:0,
    waistCir:0,
    heightUnit:'centimeters',
    waistUnit:'centimeters',
    error: "",
    warning: "",
    fatMass: 0,
    fatFreeMass:0,
    dryMass:0,
    waterPercent:0,
  });

  const captureChange = (e) => {
    const { name, value, checked } = e.target;
    setdata({ ...data, [name]: value, fatMass: 0 });
    if (checked && name === "sex") setdata({ ...data, sex: value, fatMass: 0 });
  };

  const genResultLength = () => {
    const {sex, height, waistCir, heightUnit, waistUnit} = data;
    console.log(data)
    if (sex == "") {
      return setdata({ ...data, error: `Gender must be set` });
    }
    if (heightUnit !== waistUnit) {
      return setdata({ ...data, error: `Height and waist circumference must have the same unit` });
    }
    if(height<20 && heightUnit ==='centimeters'){
        return setdata({ ...data, error: `You must have chosen the wrong unit for height. Height cannot be ${data.height} centimeters`});
    }
    if(height>2.5 && heightUnit ==='meters'){
        return setdata({ ...data, error: `You must have chosen the wrong unit for height. Height cannot be ${data.height} meters`});
    }
    if (sex==='male'){
        const fatMass = (64 - (20*(height/waistCir))).toFixed(2)
        const fatFreeMass = (100- fatMass).toFixed(2)
        const dryMass = (fatFreeMass - ((73.8/100)*fatFreeMass)).toFixed(2)
        const waterPercent = (fatFreeMass - dryMass).toFixed(2)
        setdata({...data, fatMass, fatFreeMass, waterPercent, dryMass, error:''})
    }
    if (sex==='female'){
        const fatMass = (76 - (20*height/waistCir)).toFixed(2)
        const fatFreeMass = (100- fatMass).toFixed(2)
        const dryMass = (fatFreeMass - ((73.8/100)*fatFreeMass)).toFixed(2)
        const waterPercent = (fatFreeMass - dryMass).toFixed(2)
        setdata({...data, fatMass, fatFreeMass, waterPercent, dryMass, error:""})
    }
  };

    return (
        <div className={styles.main}>
        <div className={styles.container}>
            <div>
                <h3>Fat Mass and Fat Free Mass</h3>
                <FatMassForm
                    data={data}
                    captureChange={captureChange}
                    genResultLength={genResultLength}
                />
                
                {data?.error && <h4 className={styles.error}>{data.error}</h4>}
                
                {data?.fatMass !== 0 && (
                    <div className={styles.compositionResult}>
                        <h4> A {data.sex} with a waist circumference of {data.waistCir}{data.waistUnit} has the following values:</h4>
                        <h4>Fat mass: <span>{data.fatMass}%</span>
                        </h4>
                        <h4>Fat-Free mass (without water): <span>{data.dryMass}%</span></h4>
                        <h4>Body water composition: <span>{data.waterPercent}%</span></h4>
                    </div>
                )}
                    
                    <h5>
                        All that is required to estimate your fat mass (and general body composition) is a tape measure.
                    </h5>
                    <h5>
                        First get your height, then your waist circumference. To get the best results for your waist,
                        put the tape measure at the top of your hip bone and wrap it around your body.
                        According to Cedars Sinai (the creators of the formula behind this method), you may measure your height and waist circumference in any units you want.
                        Just make sure both height and waist circumference are in the same units.
                    </h5>
            </div>
        </div>
        </div>
    );
};

export default FatFreeComp;
