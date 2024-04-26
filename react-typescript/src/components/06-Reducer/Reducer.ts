export type StateStatus = {
    count: number
};

export const initialState: StateStatus = {
    count: 0
}

type UpdateCountAction = {
    type: "increment" | "decrement"
};

type CounterAction = UpdateCountAction

export const Reducer = (state: StateStatus, action: CounterAction): StateStatus => {
  switch(action.type){
    case "increment":
      return {...state, count: state.count + 1};
    case "decrement":
      return {...state, count: state.count - 1};
    default:
    return state;
  }
}
