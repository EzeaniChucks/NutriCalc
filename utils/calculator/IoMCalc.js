export function IoMCalc ({data, setdata}){
    
    const { weight, height, age, sex, PALevels} = data;    
     const bmi = Number(weight / height ** 2);
            if(age>=9 && age<=18){
                if(bmi>25){
                    if(sex==='male'){
                        const resKcal = -114.1 - 50.9*age + PALevels*(19.5*weight+1161.4*height)
                        const resBmr = 0 //institue of medicine eqation doesn't consider using BMR
                        return setdata({...data, kcalResult:resKcal, bmrResult:resBmr, warningInfo:'', errorInfo:''})
                    }
                    if(sex==='female'){
                        const resKcal = 345.1 -6.91*age + PALevels*(9.36*weight+726*height)
                        const resBmr = 0 //institue of medicine eqation doesn't consider using BMR
                        return setdata({...data, kcalResult:resKcal, bmrResult:resBmr, warningInfo:'', errorInfo:''})
                    }
                }
                if(bmi<=25){
                    if(sex==='male'){
                        const resKcal = 113.5 -61.9*age + PALevels*(26.7*weight+903*height)
                        const resBmr = 0 //institue of medicine eqation doesn't consider using BMR
                        return setdata({...data, kcalResult:resKcal, bmrResult:resBmr, warningInfo:'', errorInfo:''})
                    }
                    if(sex==='female'){
                        const resKcal = 160.3 -30.8*age + PALevels*(10*weight+934*height)
                        const resBmr = 0 //institue of medicine eqation doesn't consider using BMR
                        return setdata({...data, kcalResult:resKcal, bmrResult:resBmr, warningInfo:'', errorInfo:''})
                    }
                }
            }
            if(age>=19){
                if(bmi<=25){
                    if(sex==='male'){
                        const resKcal = 661.8 -9.53*age + PALevels*(15.91*weight+539.6*height)
                        const resBmr = 0 //institue of medicine eqation doesn't consider using BMR
                        return setdata({...data, kcalResult:resKcal, bmrResult:resBmr, warningInfo:'', errorInfo:''})
                    }
                    if(sex==='female'){
                        const resKcal = 354.1 -6.91*age + PALevels*(9.36*weight+726*height)
                        const resBmr = 0 //institue of medicine eqation doesn't consider using BMR
                        return setdata({...data, kcalResult:resKcal, bmrResult:resBmr, warningInfo:'', errorInfo:''})
                    }
                }
                if(bmi>25){
                    if(sex==='male'){
                        const resKcal = 1085.5 -10.08*age + PALevels*(13.7*weight+416*height)
                        const resBmr = 0 //institue of medicine eqation doesn't consider using BMR
                        return setdata({...data, kcalResult:resKcal, bmrResult:resBmr, warningInfo:'', errorInfo:''})
                    }
                    if(sex==='female'){
                        const resKcal = 447.6 - 7.95*age + PALevels*(11.4*weight+619*height)
                        const resBmr = 0 //institue of medicine eqation doesn't consider using BMR
                        return setdata({...data, kcalResult:resKcal, bmrResult:resBmr, warningInfo:'', errorInfo:''})
                    }
                }
            }
}