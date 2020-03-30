import produce from 'immer';

const INITIAL_STATE = {
  data: {},
  signed: false,
  loading: false,
};

export default function recipients(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@recipients/RECIPIENTS_CREATE': {
        draft.loading = true;
        break;
      }
      case '@recipients/RECIPIENTS_NEW_UPDATE': {
        draft.loading = true;
        break;
      }
      case '@recipients/RECIPIENTS_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@recipients/RECIPIENTS_UPDATE': {
        draft.data = { ...action.payload };
        break;
      }
      case '@recipients/RECIPIENTS_FAILURE': {
        draft.error = true;
        break;
      }
      default:
    }
  });
}
