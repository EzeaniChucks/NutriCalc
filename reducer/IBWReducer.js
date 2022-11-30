export const reducer = (state, { payload, type }) => {
  if (type === "GENERAL_CHANGE") {
    if (payload.checked && payload.name === "sex") {
      return { ...state, [payload.name]: payload.value };
    }
    if (payload.checked && payload.name === "childgender") {
      return { ...state, [payload.name]: payload.value };
    }
    if (payload.selectedIndex >= 0) {
      return {
        ...state,
        [payload.name]: payload.value,
        index: payload.selectedIndex,
      };
    }

    return { ...state, [payload.name]: payload.value };
  }
  if (type === "GEN_RESULT") {
    return { ...state, resultAdult: payload, errorAdult: "" };
  }
  if (type === "GEN_RESULT_CHILD") {
    return { ...state, childresult: payload, error: "" };
  }
  if (type === "CLEAR_RESULT") {
    return {
      ...state,
      resultAdult: 0,
      childresult: 0,
      error: "",
      errorAdult: "",
    };
  }
  if (type === "CLEAR_ADULT_VALS") {
    return { ...state, age: 0, height: 0, resultAdult: 0 };
  }
  if (type === "CLEAR_CHILD_VALS") {
    return { ...state, childage: 0, childheight: 0, childresult: 0 };
  }
  if (type === "ERROR") {
    return { ...state, error: payload };
  }
  if (type === "ERRORADULT") {
    return { ...state, errorAdult: payload };
  }
  throw Error("Action type does not exist");
};
