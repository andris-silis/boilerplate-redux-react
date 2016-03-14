
const SET = "thunk/SET";

const initialState = 0;

export function thunkAction() {
  return async(dispatch, getState) => {
    // fetching
    // dispatch();

    // const response = await window.fetch("/");
    // await response.json();

    // fetched
    // dispatch(setValue(10));
    // save
  }
}

export function setValue(value) {
  return {
    type: SET,
    payload: {
      value,
    }
  };
}

export default function thunk(state = initialState, action) {
  switch (action.type) {
    case SET:
      return action.payload.value;
  }
  return state;
}


