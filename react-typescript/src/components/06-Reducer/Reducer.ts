export type StateStatus = {
    count: number
};

export const initialState: StateStatus = {
    count: 0
}

export const Reducer = (state: StateStatus, action: any): StateStatus => {
  return state;
}
