export const hoCalc =({data, setdata})=>{
    const { weight, age, sex, PALevels} = data;
    if(age>=18 && age<=30.99){
        if(sex==='male'){
            const resBmr = 16*weight + 545 
            const resKcal = PALevels*resBmr
            return setdata({...data, kcalResult:resKcal, bmrResult:resBmr, warningInfo:'', errorInfo:''})
        }
        if(sex==='female'){
            const resBmr = 13.1 * weight + 558;
            const resKcal = PALevels * resBmr;
            return setdata({...data, kcalResult:resKcal, bmrResult:resBmr, warningInfo:'', errorInfo:''})
        }
    };
    if(age>=31 && age<=60.99){
        if(sex==='male'){
            const resBmr = 14.2*weight + 593 
            const resKcal = PALevels*resBmr
            return setdata({...data, kcalResult:resKcal, bmrResult:resBmr, warningInfo:'', errorInfo:''})
        }
        if(sex==='female'){
            const resBmr = 9.7 * weight + 694;
            const resKcal = PALevels * resBmr;
            return setdata({...data, kcalResult:resKcal, bmrResult:resBmr, warningInfo:'', errorInfo:''})
        }
    };
    if(age>=61){
        if(sex==='male'){
            const resBmr = 13.5*weight + 514 
            const resKcal = PALevels*resBmr
            return setdata({...data, kcalResult:resKcal, bmrResult:resBmr, warningInfo:'', errorInfo:''})
        }
        if(sex==='female'){
            const resBmr = 10.1 * weight + 569;
            const resKcal = PALevels * resBmr;
            return setdata({...data, kcalResult:resKcal, bmrResult:resBmr, warningInfo:'', errorInfo:''})
        }
    };       
}