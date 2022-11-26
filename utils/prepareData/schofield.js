
export const Scho =({prev, setPVals, Pvals})=>{
  const { sex} = prev;
  
  if(sex === "male") {
    setPVals({...Pvals,sedentary: 1.3, lightlyActive: 1.6, moderatelyActive: 1.7, extraActive: 2.1, extremelyActive:2.4});
  }
  if (sex === "female") {
    setPVals({...Pvals, sedentary: 1.3, lightlyActive: 1.5, moderatelyActive: 1.6, extraActive: 1.9, extremelyActive:2.2});
  }
  
  //access the just upadted PVALs. Use it to programmatically determine
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