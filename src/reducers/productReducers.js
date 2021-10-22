import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQIUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQIUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

export const productReducers=(state = {loading:true, products:[] },action)=>{
    switch (action.type) {
        case PRODUCT_LIST_REQIUEST:
            return {loading:true};
        case PRODUCT_LIST_SUCCESS:
            return{loading:false,products:action.payload};
            case PRODUCT_LIST_FAIL:
                return{loading:false,error:action.payload};
        default:
            return state;
    }
}

export const productDetailsReducer = (
    state = { product: {}, loading: true },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_DETAIL_REQIUEST:
        return { loading: true };
      case PRODUCT_DETAIL_SUCCESS:
        return { loading: false, product: action.payload };
      case PRODUCT_DETAIL_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };