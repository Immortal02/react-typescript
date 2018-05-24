import "rxjs";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import ui, { UIState, showLoadingEpic } from "./uiReducer";

export interface RootState  {
    ui: UIState;
}
  
export const rootReducer = combineReducers<RootState>({
    ui,
});

export const rootEpic = combineEpics(
    showLoadingEpic
);