export function recipientsUpdate(data) {
  return {
    type: '@recipients/RECIPIENTS_UPDATE',
    payload: { ...data },
  };
}

export function recipientsCreate(data) {
  return {
    type: '@recipients/RECIPIENTS_CREATE',
    payload: { data },
  };
}

export function recipientsNewUpdate(data) {
  return {
    type: '@recipients/RECIPIENTS_NEW_UPDATE',
    payload: { ...data },
  };
}

export function recipientsSuccess() {
  return {
    type: '@recipients/RECIPIENTS_SUCCESS',
  };
}

export function recipientsFailure() {
  return {
    type: '@recipients/RECIPIENTS_FAILURE',
  };
}
