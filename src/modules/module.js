const SET = "module/SET";

const initialState = 0;

export function setValue(value) {
  return {
    type: SET,
    payload: {
      value,
    }
  };
}

export default function module(state = initialState, action) {
  switch (action.type) {
    case SET:
      return action.payload.value;
  }
  return state;
}
