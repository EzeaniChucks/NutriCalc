export const msjCalc = ({data, setdata})=>{
    const { weight, height, age, sex, PALevels } = data;
    if(sex === 'male'){
        const res = 10*weight + 6.25*height + 5*age +5
        const kres = res * PALevels;
        return setdata({...data, bmrResult:res, kcalResult: kres, errorInfo:''})
    }
            
    if(sex === 'female'){
        const res = 10*weight + 6.25*height -5*age -161
        const kres = res * PALevels;
        return setdata({...data, bmrResult:res, kcalResult: kres, errorInfo:''})
    }
}