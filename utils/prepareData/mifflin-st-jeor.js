export const msj =({prev, setPVals, Pvals})=>{
    // if(prev.sex==='male'){
    //     setPVals({...Pvals,sedentary: 1.4, lightlyActive: 1.55, moderatelyActive: 1.7, extraActive: 1.8, extremelyActive:1.9});
    // }
    // if(prev.sex==='female'){
    //     setPVals({...Pvals,sedentary: 1.4, lightlyActive: 1.5, moderatelyActive: 1.55, extraActive: 1.6, extremelyActive:1.7});
    // }
    setPVals({...Pvals, sedentary:1.2, lightlyActive:1.375, moderatelyActive:1.55, extraActive:1.725})
    
    
    //acces the just upadted PVALs. Use it to programmatically determine
    //value of final physical activity level as well as value of select tag
    setPVals((prevVals)=>{
        let index = 0;
        for (let val in prevVals) {
        if (index === prev.index) {
            const test = document.querySelector("#selectTagPa").value = prevVals[val];
            prev.PALevels = test
        }
        index++;
        }
        return prevVals;
    })

    return prev;
}