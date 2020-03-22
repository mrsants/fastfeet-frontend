export function loadInRequest(name, page) {
  return {
    type: "@delirymans/LOAD_IN_REQUEST",
    payload: { name, page }
  };
}

export function loadInSuccess(data) {
  return {
    type: "@delirymans/LOAD_IN_SUCCESS",
    payload: { ...data }
  };
}

export function loadFailure() {
  return {
    type: "@delirymans/LOAD_FAILURE"
  };
}
