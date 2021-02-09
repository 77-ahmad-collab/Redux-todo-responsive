import { ADD, DEL, EDIT } from "./Actions";
const defaultstate = {
  id: 0,
  list: [],

  editid: 0,
};
export default function reducer(state = defaultstate, action) {
  if (action.type === ADD && !action.payload.edititem && action.payload.value) {
    const newlist = [...state.list, action.payload.value];
    console.log(state, "bef");
    return { ...state, list: newlist };
  } else if (action.type === DEL) {
    const newitems = [
      ...state.list.filter((val, index) => {
        return index !== action.payload;
      }),
    ];
    return { ...state, list: newitems };
  } else if (action.type === EDIT) {
    const list = [...state.list];
    list[action.payload.editid] = action.payload.value;
    return { ...state, list };
  }
  ///----------my logic
  // const edititem = [
  //   ...state.list.filter((val, id) => {
  //     return id === action.payload.index;
  //   }),
  // ];
  // const setedititem = edititem.toString();

  // console.log(state, "bef");
  // // console.log(mynewvalue, "i am my new");
  // return { ...state, myvalue: setedititem };

  return state;
}
