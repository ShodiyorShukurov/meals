export const reducer = (state, action) => {
  if (action.type === "GET_ALL_CATEGORIES") {
    return {
      ...state,
      meals: action.payload,
    };
  } else if (action.type === "GET_MEALS_CATEGORY") {
    return {
      ...state,
      mealsCategoriezed: action.payload,
    };
  } else if (action.type === "SEARCH") {
    return {
      ...state,
      searchFiltred: action.payload,
    };
  } else if (action.type === "MEALS_CATEGORY_COUNT") {
    return {
      ...state,
      mealsCount: state.mealsCount + 8,
    };
  } else if (action.type === "MEALS_CATEGORIEZED_COUNT") {
    return {
      ...state,
      mealsCategoriezedCount: state.mealsCategoriezedCount + 8,
    };
  }
};
