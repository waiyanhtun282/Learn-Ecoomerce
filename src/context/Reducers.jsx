export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state,products:action.payload };
      case "ADD_TO-CART":
        return { ...state,carts:[...state.carts,{carts:action.payload}] };
        case "REMOVE_CART":
          return {...state,carts:state.carts.filter(item => item.id !==action.payload.id)};
    default:
      return state;
  }
};