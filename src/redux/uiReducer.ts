// ==========================================================================================================================================================

/* !------------------------------------------------- */
/* !  Action Types */

// ==========================================================================================================================================================
export interface UIState {
    type: string;
    loading: boolean;
}

const initialState: UIState = {
    type: "",
    loading: false,
};

// ==========================================================================================================================================================

/* !------------------------------------------------- */
/* !  Action Types */

// ==========================================================================================================================================================
export enum ACTIONS {
    SHOW_LOADING = "SHOW_LOADING",
    SHOW_LOADING_EPIC = "SHOW_LOADING_EPIC",
    HIDE_LOADING = "HIDE_LOADING",
}
// ==========================================================================================================================================================

/* !------------------------------------------------- */
/* !  Action Creators */

// ==========================================================================================================================================================
export const showLoading = () => ({ type: ACTIONS.SHOW_LOADING });
export const showLoadingWithEpic = () => ({ type: ACTIONS.SHOW_LOADING_EPIC });
export const hideLoading = () => ({ type: ACTIONS.HIDE_LOADING });
// ==========================================================================================================================================================

/* !------------------------------------------------- */
/* !  Epic Creators */

// ==========================================================================================================================================================
export const showLoadingEpic = (action?: any) =>
    action.ofType(ACTIONS.SHOW_LOADING_EPIC)
        .delay(1000)
        .map(hideLoading);

// ==========================================================================================================================================================

/* !------------------------------------------------- */
/* ! Reducer */

// ==========================================================================================================================================================
const uiReducer = (state: UIState = initialState, action: any): UIState => {
    switch (action.type as ACTIONS) {
        case ACTIONS.SHOW_LOADING:      return Object.assign({}, state, {type: action.type, loading: true});
        case ACTIONS.SHOW_LOADING_EPIC: return Object.assign({}, state, {type: action.type, loading: true});
        case ACTIONS.HIDE_LOADING:      return Object.assign({}, state, {type: action.type, loading: false});
        default:           		        return state;
    }
};

export default uiReducer;