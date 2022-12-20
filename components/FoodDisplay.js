import styles from "./FoodDisplay.module.css";

const FoodDisplay = ({
  breakfastArr,
  postBreakfastArr,
  lunchArr,
  postLunchArr,
  dinnerArr,
  postDinnerArr,
  dispatch,
}) => {
  const handleAnalysis = () => {
    let totalArr = [
      ...breakfastArr,
      ...postBreakfastArr,
      ...lunchArr,
      ...postLunchArr,
      ...dinnerArr,
      ...postDinnerArr,
    ];

    let initial = {
      ENERC_kJ: 0,
      ENERC_kcal: 0,
      WATER_g: 0,
      PROTCNT_g: 0,
      FATCE_g: 0,
      CHOCDF_g: 0,
      FIB_g: 0,
      ASH_g: 0,
      Ca_mg: 0,
      Fe_mg: 0,
      Mg_mg: 0,
      P_mg: 0,
      K_mg: 0,
      Na_mg: 0,
      Zn_mg: 0,
      Cu_mg: 0,
      VITE_mg: 0,
      THIA_mg: 0,
      RIBF_mg: 0,
      NIAEQ_mg: 0,
      VIT_B6_mg: 0,
      FOL_mcg: 0,
    };
    let result = totalArr.reduce((total, item) => {
      return {
        ...total,
        ASH_g:
          total.ASH_g + (Number(item.amountEaten) / 100) * Number(item.ASH_g),
        CHOCDF_g:
          total.CHOCDF_g +
          (Number(item.amountEaten) / 100) * Number(item.CHOCDF_g),
        Ca_mg:
          total.Ca_mg + (Number(item.amountEaten) / 100) * Number(item.Ca_mg),
        Cu_mg:
          total.Cu_mg + (Number(item.amountEaten) / 100) * Number(item.Cu_mg),
        ENERC_kJ:
          total.ENERC_kJ +
          (Number(item.amountEaten) / 100) * Number(item.ENERC_kJ),
        ENERC_kcal:
          total.ENERC_kcal +
          (Number(item.amountEaten) / 100) * Number(item.ENERC_kcal),
        FATCE_g:
          total.FATCE_g +
          (Number(item.amountEaten) / 100) * Number(item.FATCE_g),
        FIB_g:
          total.FIB_g + (Number(item.amountEaten) / 100) * Number(item.FIB_g),
        FOL_mcg:
          total.FOL_mcg +
          (Number(item.amountEaten) / 100) * Number(item.FOL_mcg),
        Fe_mg:
          total.Fe_mg + (Number(item.amountEaten) / 100) * Number(item.Fe_mg),
        K_mg: total.K_mg + (Number(item.amountEaten) / 100) * Number(item.K_mg),
        Mg_mg:
          total.Mg_mg + (Number(item.amountEaten) / 100) * Number(item.Mg_mg),
        NIAEQ_mg:
          total.NIAEQ_mg +
          (Number(item.amountEaten) / 100) * Number(item.NIAEQ_mg),
        Na_mg:
          total.Na_mg + (Number(item.amountEaten) / 100) * Number(item.Na_mg),
        PROTCNT_g:
          total.PROTCNT_g +
          (Number(item.amountEaten) / 100) * Number(item.PROTCNT_g),
        P_mg: total.P_mg + (Number(item.amountEaten) / 100) * Number(item.P_mg),
        RIBF_mg:
          total.RIBF_mg +
          (Number(item.amountEaten) / 100) * Number(item.RIBF_mg),
        THIA_mg:
          total.THIA_mg +
          (Number(item.amountEaten) / 100) * Number(item.THIA_mg),
        VITE_mg:
          total.VITE_mg +
          (Number(item.amountEaten) / 100) * Number(item.VITE_mg),
        VIT_B6_mg:
          total.VIT_B6_mg +
          (Number(item.amountEaten) / 100) * Number(item.VIT_B6_mg),
        WATER_g:
          total.WATER_g +
          (Number(item.amountEaten) / 100) * Number(item.WATER_g),
        Zn_mg:
          total.Zn_mg + (Number(item.amountEaten) / 100) * Number(item.Zn_mg),
      };
    }, initial);

    dispatch({ type: "RESULT", payload: result });
  };
  return (
    <div className={styles.foodDisplay}>
      <div>
        <div className={styles.breakfast}>
          <p>Breakfast</p>
          {breakfastArr?.length > 0 ? (
            <div>
              {breakfastArr.map((item, index) => {
                return (
                  <p key={item.Id}>
                    ({index + 1}) {item.amountEaten}g of{" "}
                    {item.SearchName.slice(0, 30)}. . .
                  </p>
                );
              })}
            </div>
          ) : (
            <p>No items added yet</p>
          )}
        </div>
        <div className={styles.midBreakfast}>
          <p>Post Breakfast</p>
          {postBreakfastArr?.length > 0 ? (
            <div>
              {postBreakfastArr.map((item, index) => {
                return (
                  <p key={item.Id}>
                    ({index + 1}) {item.amountEaten}g of{" "}
                    {item.SearchName.slice(0, 30)}. . .
                  </p>
                );
              })}
            </div>
          ) : (
            <p>No items added yet</p>
          )}
        </div>
        <div className={styles.lunch}>
          <p>Lunch</p>
          {lunchArr?.length > 0 ? (
            <div>
              {lunchArr.map((item, index) => {
                return (
                  <p key={item.Id}>
                    ({index + 1}) {item.amountEaten}g of{" "}
                    {item.SearchName.slice(0, 30)}. . .
                  </p>
                );
              })}
            </div>
          ) : (
            <p>No items added yet</p>
          )}
        </div>
        <div className={styles.midLunch}>
          <p>Post Lunch</p>
          {postLunchArr?.length > 0 ? (
            <div>
              {postLunchArr.map((item, index) => {
                return (
                  <p key={item.Id}>
                    ({index + 1}) {item.amountEaten}g of{" "}
                    {item.SearchName.slice(0, 30)}. . .
                  </p>
                );
              })}
            </div>
          ) : (
            <p>No items added yet</p>
          )}
        </div>
        <div className={styles.dinner}>
          <p>Dinner</p>
          {dinnerArr?.length > 0 ? (
            <div>
              {dinnerArr.map((item, index) => {
                return (
                  <p key={item.Id}>
                    ({index + 1}) {item.amountEaten}g of{" "}
                    {item.SearchName.slice(0, 30)}. . .
                  </p>
                );
              })}
            </div>
          ) : (
            <p>No items added yet</p>
          )}
        </div>
        <div className={styles.postDinner}>
          <p>Post-Dinner</p>
          {postDinnerArr?.length > 0 ? (
            <div>
              {postDinnerArr.map((item, index) => {
                return (
                  <p key={item.Id}>
                    ({index + 1}) {item.amountEaten}g of{" "}
                    {item.SearchName.slice(0, 30)}. . .
                  </p>
                );
              })}
            </div>
          ) : (
            <p>No items added yet</p>
          )}
        </div>
      </div>
      <button onClick={handleAnalysis}>Analyse Meal</button>
    </div>
  );
};

export default FoodDisplay;
