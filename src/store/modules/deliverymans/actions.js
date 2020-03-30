export function deliverymansUpdate(data) {
  return {
    type: '@deliverymans/DELIVERYMANS_UPDATE',
    payload: { ...data },
  };
}

export function deliverymansCreate(name, email, avatar_id) {
  return {
    type: '@deliverymans/DELIVERYMANS_CREATE',
    payload: { name, email, avatar_id },
  };
}

export function deliverymansNewUpdate(id, name, email, avatar_id) {
  return {
    type: '@deliverymans/DELIVERYMANS_NEW_UPDATE',
    payload: { id, name, email, avatar_id },
  };
}

export function deliverymansSuccess() {
  return {
    type: '@deliverymans/DELIVERYMANS_SUCCESS',
  };
}

export function deliverymansFailure() {
  return {
    type: '@deliverymans/DELIVERYMANS_FAILURE',
  };
}
