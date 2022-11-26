
export const IofM =({prev, setPVals, Pvals})=>{
  const { sex, age, weight, height } = prev;
  const bmi = weight / height ** 2;
  if (age >= 9 && age <= 18) {
      if (bmi > 25) {
          if (sex === "male") {
            setPVals({...Pvals,sedentary: 1, lightlyActive: 1.12, moderatelyActive: 1.24, extraActive: 1.45,});
          }
          if (sex === "female") {
            setPVals({...Pvals, sedentary: 1, lightlyActive: 1.18, moderatelyActive: 1.35, extraActive: 1.6,});
        }
      }

    if (bmi <= 25) {
      if (sex === "male") {
        setPVals({...Pvals, sedentary: 1, lightlyActive: 1.13, moderatelyActive: 1.26, extraActive: 1.42});
        }
      if (sex === "female") {
        setPVals({...Pvals, sedentary: 1, lightlyActive: 1.16, moderatelyActive: 1.31, extraActive: 1.56});
      }
    }
  }

  if (age >= 19) {
    if (bmi > 25) {
      if (sex === "male") {
        setPVals({...Pvals, sedentary: 1, lightlyActive: 1.12, moderatelyActive: 1.29, extraActive: 1.59});
      }
      if (sex === "female") {
        setPVals({...Pvals, sedentary: 1, lightlyActive: 1.16, moderatelyActive: 1.27, extraActive: 1.44});
      }
    }
    if (bmi <= 25) {
      if (sex === "male") {
        setPVals({...Pvals, sedentary: 1, lightlyActive: 1.11, moderatelyActive: 1.25, extraActive: 1.48});
      }
      if (sex === "female") {
        setPVals({...Pvals,sedentary: 1,lightlyActive: 1.12,moderatelyActive: 1.27, extraActive: 1.45,});
      }
    }
  }

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