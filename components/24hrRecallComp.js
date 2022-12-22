import styles from "./24hrComp.module.css";
import { foodData } from "../utils/data";
import { useCallback, useReducer } from "react";
import { Twenty4Reducer } from "../reducer/twenty4Reducer";
import { twenty4DefaultState } from "../defaultStates/defaultState";
import FoodDisplay from "./FoodDisplay";
import AddListModal from "./AddListModal";

const allNameArray = foodData
  .map((foodItem) => {
    let strArr = [];
    let str = foodItem.SearchName;
    strArr.push(str.toLowerCase());
    return [...strArr];
  })
  .flat();
const initial = {
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
//component
const TwentyFourComp = () => {
  const [state, dispatch] = useReducer(Twenty4Reducer, twenty4DefaultState);
  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "textSearch") {
      const filteredSearch = allNameArray.filter((item) => {
        if (item.includes(value.toLowerCase())) {
          return item;
        }
      });
      dispatch({ type: "CHOSEN_VALUE", payload: value });
      dispatch({ type: "FOODLIST_FILTER", payload: filteredSearch });
      dispatch({ type: "ERROR", payload: `` });
      if (value === "") dispatch({ type: "FOODLIST_FILTER", payload: [] });
    }
    if (name === "foodSelect") {
      dispatch({ type: "FOOD_TIME", payload: value });
    }
    if (name === "amount") {
      dispatch({ type: "FOOD_AMOUNT", payload: value });
    }
    if (name === "clientName") {
      dispatch({ type: "", payload: value });
    }
  };

  const handleInputClick = () => {
    dispatch({ type: "FOODLIST_FILTER", payload: [] });
  };

  const handleFoodItem = (e) => {
    dispatch({ type: "CHOSEN_VALUE", payload: e.target.textContent });
    dispatch({ type: "FOODLIST_FILTER", payload: [] });
  };
  const handleAddition = () => {
    if (state.chosenFood.length === 0) {
      dispatch({
        type: "ERROR",
        payload: "Search or type a food to continue",
      });
      return runCallBack();
    }
    if (state.foodAmount === 0 || state.foodAmount === "") {
      dispatch({
        type: "ERROR",
        payload: "Food weight can't be zero grams",
      });
      return runCallBack();
    }
    if (state.chosenFood.length > 0) {
      const itemToAdd = foodData.find((item) => {
        return item.SearchName.toLowerCase().includes(
          state.chosenFood.toLowerCase()
        );
      }); //get entire object with value typed in input a.k.a chosenFood

      if (!itemToAdd) {
        return dispatch({
          type: "ERROR",
          payload: `This food item isn't on our database yet. Use another search word or kindly submit the food's name in our Suggestion Section.
          We'll make it available for your use.`,
        });
        // return console.log(`Food isn't yet on database`);
      }
      dispatch({
        type: "ADD_FOODS",
        name: state.foodTime,
        payload: { ...initial, ...itemToAdd, amountEaten: state.foodAmount },
      });
      dispatch({ type: "RESET_VALUES" });
      runCallBack();
    }
  };

  const runCallBack = useCallback(() => {
    return setTimeout(() => {
      dispatch({ type: "RESET_NOTICES" });
    }, 3000);
  }, [state.success, state.warning]);

  return (
    <div className={styles.main} onClick={handleInputClick}>
      <div className={styles.container}>
        <p className={styles.heading}>Analyze Your Diet</p>
        <p>
          Use the form below to add foods to the table beneath, then analyse the
          table
        </p>
        <label>
          Food Eaten
          <input
            onChange={handleChange}
            onClick={handleInputClick}
            type="text"
            autoComplete="off"
            placeholder="Search Any Food"
            name="textSearch"
            value={state?.chosenFood}
          />
        </label>
        <label>
          Amount Eaten
          <div>
            <input
              onChange={handleChange}
              type="number"
              value={state.foodAmount}
              name="amount"
            />
            <p>grams</p>
          </div>
        </label>
        {state?.searchList.length > 0 && (
          <div className={styles.searchList}>
            {state?.searchList.map((item, index) => {
              return (
                <p onClick={handleFoodItem} key={index}>
                  {item}
                </p>
              );
            })}
          </div>
        )}
        <label>
          Period:
          <select id="food-select" name="foodSelect" onChange={handleChange}>
            <option value="breakfast">Breakfast</option>
            <option value="postBreakfast">Post-Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="postLunch">Post-Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="postDinner">Post-Dinner</option>
          </select>
        </label>
        {state.warning && <p className={styles.warning}>{state.warning}</p>}
        {state.success && <p className={styles.success}>{state.success}</p>}
        <label>
          <button onClick={handleAddition}>Add item to {state.foodTime}</button>
        </label>
        <FoodDisplay {...state} dispatch={dispatch} />
        {state?.result?.length > 0 && (
          <>
            <h4 className={styles.heading}>Result</h4>
            {state.result.map((obj, index) => {
              return (
                <div className={styles.result} key={index}>
                  <p>
                    Energy: <span>{obj.ENERC_kcal.toFixed(2)} kcal/</span>
                    <span>{obj.ENERC_kJ.toFixed(2)} kJ</span>
                  </p>
                  <p>
                    Carbs: <span>{obj.CHOCDF_g.toFixed(2)} g</span>
                  </p>
                  <p>
                    Protein: <span>{obj.PROTCNT_g.toFixed(2)} g</span>
                  </p>
                  <p>
                    Fat: <span>{obj.FATCE_g.toFixed(2)} g</span>
                  </p>
                  <p>
                    Ash: <span>{obj.ASH_g.toFixed(2)} g</span>
                  </p>
                  <p>
                    Calcium: <span>{obj.Ca_mg.toFixed(2)} mg</span>
                  </p>
                  <p>
                    Copper: <span>{obj.Cu_mg.toFixed(2)} mg</span>
                  </p>
                  <p>
                    Fibre: <span>{obj.FIB_g.toFixed(2)} g</span>
                  </p>
                  <p>
                    Folate: <span>{obj.FOL_mcg.toFixed(2)} mcg</span>
                  </p>
                  <p>
                    Iron: <span>{obj.Fe_mg.toFixed(2)} mg</span>
                  </p>
                  <p>
                    Potassium: <span>{obj.K_mg.toFixed(2)} mg</span>
                  </p>
                  <p>
                    Magnesium: <span>{obj.Mg_mg.toFixed(2)} mg</span>
                  </p>
                  <p>
                    Niacin: <span>{obj.NIAEQ_mg.toFixed(2)} mgEq</span>
                  </p>
                  <p>
                    Sodium: <span>{obj.Na_mg.toFixed(2)} mg</span>
                  </p>
                  <p>
                    Phosphorus: <span>{obj.P_mg.toFixed(2)} mg</span>
                  </p>
                  <p>
                    Riboflavin: <span>{obj.RIBF_mg.toFixed(2)} mg</span>
                  </p>
                  <p>
                    Thiamin: <span>{obj.THIA_mg.toFixed(2)} mg</span>
                  </p>
                  <p>
                    Vit E: <span>{obj.VITE_mg.toFixed(2)} mg</span>
                  </p>
                  <p>
                    VIT B6: <span>{obj.VIT_B6_mg.toFixed(2)} mg</span>
                  </p>
                  <p>
                    Water: <span>{obj.WATER_g.toFixed(2)} g</span>
                  </p>
                  <p>
                    Zinc: <span>{obj.Zn_mg.toFixed(2)} mg</span>
                  </p>
                </div>
              );
            })}
            <h3>Save result to Result List? </h3>
            <h4>
              (You may need to export this list to an Excel Sheet for nutrient
              analysis, or reference client data for future use)
            </h4>
            <button onClick={() => dispatch({ type: "ADDLIST_MODAL" })}>
              Save result
            </button>
          </>
        )}
        <h3
          onClick={() => dispatch({ type: "VIEWLIST_MODAL" })}
          className={styles.savedList}
        >
          View Saved List
        </h3>
        {state.isAddListModalOpen && (
          <AddListModal
            {...state}
            dispatch={dispatch}
            handleChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default TwentyFourComp;
