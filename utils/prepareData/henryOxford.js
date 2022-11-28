export const ho =({prev, setPVals, Pvals})=>{
    setPVals({...Pvals,sedentary: 1, lightlyActive: 1.12, moderatelyActive: 1.24, extraActive: 1.45,});

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