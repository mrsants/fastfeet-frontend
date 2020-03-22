import produce from "immer";

const INITIAL_STATE = {
  data: {},
  error: null,
  loading: false
};

export default function delirymans(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@delirymans/SIGN_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@delirymans/SIGN_IN_SUCCESS": {
        draft.data = action.payload.data;
        draft.loading = false;
        break;
      }
      case "@delirymans/SIGN_FAILURE": {
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      }
      default:
    }
  });
}
