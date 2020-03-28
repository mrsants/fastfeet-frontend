import produce from "immer";

const INITIAL_STATE = {
  data: {},
  signed: false,
  loading: false
};

export default function orders(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@orders/ORDER_CREATE": {
        // draft.loading = true;
        break;
      }
      case "@orders/ORDER_NEW_UPDATE": {
        // draft.loading = false;
        break;
      }
      case "@orders/ORDER_SUCCESS": {
        draft.signed = true;
        // draft.loading = false;
        break;
      }
      case "@orders/ORDER_UPDATE": {
        // draft.loading = false;
        draft.data = { ...action.payload}
        break;
      }
      case "@orders/ORDER_FAILURE": {
        // draft.loading = false;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
