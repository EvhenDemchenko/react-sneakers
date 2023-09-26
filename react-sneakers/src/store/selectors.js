import { createSelector } from '@reduxjs/toolkit';

const selector = {
  items: (state) => state.sneakers.items,
  cartState: (state) => state.sneakers.cartState === 'open',
  searchVal: (state) => state.sneakers.searchedValue,
};

const searchedValueItems = {
  searchedValueItems: createSelector(
    [selector.items, selector.searchVal], 
    (items, value) => {
    return items.filter((item) => {
      return item?.title?.toLowerCase().includes(value?.toLowerCase());
    });
  }),
};

const cartItems = {
  cartItems: createSelector([selector.items], (items) => {
    return items.filter((item) => item.inCart);
  }),
};

const favouriteItems = {
  favouriteItems: createSelector([selector.items], (items) => {
    return items.filter((item) => item.isFav);
  }),
};

const cartItemsSum = {
  cartItemsSum: createSelector([cartItems.cartItems], (items) => {
    return items.reduce((a, b) => a + b.price, 0);
  }),
};

export default {
  ...selector,
  ...cartItems,
  ...favouriteItems,
  ...searchedValueItems,
  ...cartItemsSum,
};
