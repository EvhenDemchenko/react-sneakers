import { setItems } from './slice';

export const addItemToCart = (id) => (dispatch, getState) => {
  const items = getState().sneakers.items;
  const res = items.map((item) => {
    if (item.id === id) {
      return { ...item, inCart: true };
    }
    return item;
  });
  dispatch(setItems(res));
};
export const removeItemFromCart = (id) => (dispatch, getState) => {
  const items = getState().sneakers.items;
  const res = items.map((item) => {
    if (item.id === id) {
      return { ...item, inCart: false };
    }
    return item;
  });
  dispatch(setItems(res));
};

export const addItemToFavourites = (id) => (dispatch, getState) => {
  const items = getState().sneakers.items;

  const res = items.map((item) => {
    if (item.id === id) {
      return { ...item, isFav: true };
    }
    return item;
  });
  dispatch(setItems(res));
};

export const removeItemFromFavourite = (id) => (dispatch, getState) => {
  const items = getState().sneakers.items;

  const res = items.map((item) => {
    if (item.id === id) {
      return { ...item, isFav: false };
    }
    return item;
  });
  dispatch(setItems(res));
};
