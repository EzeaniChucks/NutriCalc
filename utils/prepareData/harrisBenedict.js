
export function Hb({prev, setPVals, Pvals}){    
    setPVals({...Pvals, sedentary:1.2, lightlyActive:1.375, moderatelyActive:1.55, extraActive:1.725})
    setPVals((prevVals) => {
      let index = 0;
      for (let val in prevVals) {
        if (index === prev.index) {
          const test = (document.querySelector("#selectTagPa").value = prevVals[val]);
          prev.PALevels = test;
        }
        index++;
      }
      return prevVals;
    });
    return prev;
}

