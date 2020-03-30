import produce from 'immer';

const INITIAL_STATE = {
  data: {},
  signed: false,
  loading: false,
  error: true,
};

export default function deliverymans(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliverymans/DELIVERYMANS_CREATE': {
        draft.loading = true;
        break;
      }
      case '@deliverymans/DELIVERYMANS_SUCCESS': {
        draft.signed = true;
        draft.loading = false;
        draft.data = { ...action.payload };
        break;
      }
      case '@deliverymans/DELIVERYMANS_FAILURE': {
        draft.signed = true;
        draft.loading = false;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
