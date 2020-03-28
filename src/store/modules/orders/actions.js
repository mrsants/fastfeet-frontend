export function orderCreate(recipient_id, deliveryman_id, product) {
  return {
    type: "@orders/ORDER_CREATE",
    payload: { recipient_id, deliveryman_id, product }
  };
}

export function orderNewUpdate(recipient_id, deliveryman_id, product, order_id) {
  return {
    type: "@orders/ORDER_NEW_UPDATE",
    payload: { recipient_id, deliveryman_id, product, order_id }
  };
}

export function orderUpdate(data) {
  return {
    type: "@orders/ORDER_UPDATE",
    payload: { ...data }
  };
}

export function orderDelete(id) {

  return {
    type: "@orders/ORDER_DELETE",
    payload: { id }
  };
}

export function orderSuccess(data) {
  return {
    type: "@orders/ORDER_SUCCESS",
    payload: { ...data }
  };
}

export function orderFailure() {
  return {
    type: "@orders/ORDER_FAILURE"
  };
}
