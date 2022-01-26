import { Action } from "./action"


interface State {
    msgBlock: string[];
}

export const defaultState: State = {
    msgBlock: ["test", "test2"]
}

export const Reducer = (state: State = defaultState, action: Action = {} as Action): State => {
    switch (action.type) {
        case 'SET_MESSAGE_BLOCK':
            return {
                ...state,
                msgBlock: action.msgBlock,
            }
        default:
            return state;
    }
}