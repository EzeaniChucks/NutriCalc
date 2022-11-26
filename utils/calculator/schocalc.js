export const schoCalc =({data, setdata})=>{
   const { weight, age, sex, PALevels } = data;
    if(age>=10&&age<=17){
        if(sex === 'male'){
            const res = 17.686*weight + 658.2;
            const kres = res * PALevels;
            setdata({ ...data, bmrResult: res, kcalResult: kres, SEE:105, errorInfo: "", warningInfo:'' });
        }
        if(sex === 'female'){
            const res = 13.384*weight + 692.6;
            const kres = res * PALevels;
            setdata({ ...data, bmrResult: res, kcalResult: kres, SEE: 111, errorInfo: "", warningInfo:'' });
        }
    }
    if(age>=18&&age<=29){
        if(sex === 'male'){
            const res = 15.057*weight + 692.2;
            const kres = res * PALevels;
            setdata({ ...data, bmrResult: res, kcalResult: kres, SEE:153, errorInfo: "", warningInfo:'' });
        }
        if(sex === 'female'){
            const res = 14.818*weight + 486.6;
            const kres = res * PALevels;
            setdata({ ...data, bmrResult: res, kcalResult: kres, SEE: 119, errorInfo: "", warningInfo:'' });
        }
    }
    if(age>=30&&age<=59){
        if(sex === 'male'){
            const res = 11.472*weight + 873.1;
            const kres = res * PALevels;
            setdata({ ...data, bmrResult: res, kcalResult: kres, SEE:167, errorInfo: "" });
        }
        if(sex === 'female'){
            const res = 8.126*weight + 845.6;
            const kres = res * PALevels;
            setdata({ ...data, bmrResult: res, kcalResult: kres, SEE: 111, errorInfo: "" });
        }
    }
    if(age>=60){
        if(sex === 'male'){
            const res = 11.711*weight + 587.7;
            const kres = res * PALevels;
            setdata({ ...data, bmrResult: res, kcalResult: kres, SEE:164, errorInfo: "" });
        }
        if(sex === 'female'){
            const res = 9.082*weight + 658.5;
            const kres = res * PALevels;
            setdata({ ...data, bmrResult: res, kcalResult: kres, SEE: 108, errorInfo: "" });
        }
    }
}