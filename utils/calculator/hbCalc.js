export const hbCalc = ({data, setdata})=>{
    const { weight, height, age, sex, PALevels } = data;
    if(sex === 'male'){
            const res = 66.5 +(13.75* weight) + (5.003*height*100) - (6.75*age)
            const bmi  = Number(weight/height**2)
            const kres = res * PALevels;
            if(bmi>24.9){
                return setdata({...data, warningInfo:`Your BMI ${(bmi).toFixed(2)}kg/m/m is above normal weight range. Harris-Benedict formula overestimates your calorie needs`, bmrResult:res, kcalResult: kres, errorInfo:'',})
            }
            return setdata({...data, bmrResult:res, kcalResult: kres, errorInfo:'',})
            }
            
    if(sex === 'female'){
        const bmi = Number(weight / height ** 2);
        const res = 655.1 +(9.563* weight) + (1.850*height*100) - (4.676*age)
        const kres = res * PALevels;
        if(bmi>24.9){
            return setdata({...data, warningInfo:`Your BMI ${(bmi).toFixed(2)}kg/m/m is above normal weight range. Harris-Benedict formula overestimates your calorie needs`, bmrResult:res, kcalResult: kres, errorInfo:'',})
        }
        return setdata({...data, bmrResult:res, kcalResult: kres ,errorInfo:''})
    }
}