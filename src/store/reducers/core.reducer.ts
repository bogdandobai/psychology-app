import * as coreActions from '../actions/types';
import { ActionType, getType } from 'typesafe-actions';

export interface CoreState {
    firstTime: boolean;
}
const initialState: CoreState = {
    firstTime: false,
};
export type CoreActions = ActionType<typeof coreActions>;

const coreReducer = (state = initialState, action: CoreActions) => {
    switch (action.type) {
        case getType(coreActions.SetFirstTime): {
            return {
                ...state,
                firstTime: action.payload,
            };
        }
        default:
            return state;
    }
};
export default coreReducer;
