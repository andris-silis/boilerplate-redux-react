import testModule from "./modules/module";


export default function (state, action) {
  state = state.set("testValue", testModule(state.get("testValue"), action));
  return state;
}
