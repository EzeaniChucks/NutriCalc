export const Twenty4Reducer = (state, action) => {
  if (action.type === "FOODLIST_FILTER") {
    return { ...state, searchList: action.payload };
  }
  if (action.type === "CHOSEN_VALUE") {
    return { ...state, chosenFood: action.payload };
  }
  if (action.type === "FOOD_TIME") {
    return { ...state, foodTime: action.payload };
  }
  if (action.type === "FOOD_AMOUNT") {
    return { ...state, foodAmount: action.payload };
  }
  if (action.type === "ADD_FOODS") {
    if (action.name === "breakfast") {
      const verifyItem = state.breakfastArr.filter((item) => {
        return item.Id === action.payload.Id;
      });
      if (verifyItem.length > 0) {
        return {
          ...state,
          success: "",
          warning: `Item already exists in ${action.name}`,
        };
      } else {
        return {
          ...state,
          breakfastArr: [...state.breakfastArr, action.payload],
          warning: "",
          success: "Item added",
        };
      }
    }
    if (action.name === "postBreakfast") {
      const verifyItem = state.postBreakfastArr.filter((item) => {
        return item.Id === action.payload.Id;
      });
      if (verifyItem.length > 0) {
        return {
          ...state,
          success: "",
          warning: `Item already exists in ${action.name}`,
        };
      } else {
        return {
          ...state,
          postBreakfastArr: [...state.postBreakfastArr, action.payload],
          warning: "",
          success: "Item added",
        };
      }
    }
    if (action.name === "lunch") {
      const verifyItem = state.lunchArr.filter((item) => {
        return item.Id === action.payload.Id;
      });
      if (verifyItem.length > 0) {
        return {
          ...state,
          success: "",
          warning: `Item already exists in ${action.name}`,
        };
      } else {
        return {
          ...state,
          lunchArr: [...state.lunchArr, action.payload],
          warning: "",
          success: "Item added",
        };
      }
    }
    if (action.name === "postLunch") {
      const verifyItem = state.postLunchArr.filter((item) => {
        return item.Id === action.payload.Id;
      });
      if (verifyItem.length > 0) {
        return {
          ...state,
          success: "",
          warning: `Item already exists in ${action.name}`,
        };
      } else {
        return {
          ...state,
          postLunchArr: [...state.postLunchArr, action.payload],
          warning: "",
          success: "Item added",
        };
      }
    }
    if (action.name === "dinner") {
      const verifyItem = state.dinnerArr.filter((item) => {
        return item.Id === action.payload.Id;
      });
      if (verifyItem.length > 0) {
        return {
          ...state,
          success: "",
          warning: `Item already exists in ${action.name}`,
        };
      } else {
        return {
          ...state,
          dinnerArr: [...state.dinnerArr, action.payload],
          warning: "",
          success: "Item added",
        };
      }
    }
    if (action.name === "postDinner") {
      const verifyItem = state.postDinnerArr.filter((item) => {
        return item.Id === action.payload.Id;
      });
      if (verifyItem.length > 0) {
        return {
          ...state,
          success: "",
          warning: `Item already exists in ${action.name}`,
        };
      } else {
        return {
          ...state,
          postDinnerArr: [...state.postDinnerArr, action.payload],
          warning: "",
          success: "Item added",
        };
      }
    }
  }
  if (action.type === "RESULT") {
    return { ...state, result: [action.payload] };
  }
};