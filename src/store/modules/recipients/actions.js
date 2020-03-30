export function recipientsCreate(data) {
  return {
    type: '@recipients/RECIPIENTS_CREATE',
    payload: { ...data },
  };
}

export function recipientsUpdate(data) {
  return {
    type: '@recipients/RECIPIENTS_UPDATE',
    payload: { ...data },
  };
}

export function recipientsNewUpdate(id, data) {
  return {
    type: '@recipients/RECIPIENTS_NEW_UPDATE',
    payload: {
      id,
      data,
    },
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

export function recipientsDelete(id) {
  return {
    type: '@recipients/RECIPIENTS_DELETE',
    payload: { id },
  };
}
