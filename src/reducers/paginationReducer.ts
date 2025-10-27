const ITEMS_PER_PAGE = 10;

export interface Action {
  type: "FIRST" | "PREVIOUS" | "NEXT" | "LAST" | "FILTER";
  payload?: number;
}

export interface State {
  currentPage: number;
  totalItems: number;
}

export function paginationReducer(state: State, action: Action) {
  switch (action.type) {
    case "FIRST":
      return { ...state, currentPage: 1 };
    case "PREVIOUS":
      return state.currentPage !== 1
        ? { ...state, currentPage: state.currentPage - 1 }
        : { ...state };
    case "NEXT":
      return state.currentPage !== state.totalItems / ITEMS_PER_PAGE
        ? { ...state, currentPage: state.currentPage + 1 }
        : { ...state };
    case "LAST":
      return { ...state, currentPage: state.totalItems / ITEMS_PER_PAGE };
    case "FILTER":
      return typeof action.payload === "number"
        ? {
            ...state,
            totalItems: action.payload,
            currentPage: 1,
          }
        : { ...state };
    default:
      throw new Error();
  }
}
