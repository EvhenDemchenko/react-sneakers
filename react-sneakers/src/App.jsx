import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Drawer } from './components/drawer/Drawer';
import { Overlay } from './components/overlay/Overlay';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from './store/slice';
import Selector from './store/selectors';
import axios from 'axios';
import { Items } from './components/items/Items';
import { Routes, Route } from 'react-router-dom';
import { Wrapper } from './components/wrapper/Wrapper';
import { FavouritePage } from './components/favouritePage/FavouritePage';
import { OrderPage } from './components/orderPage/OrderPage';
import { ThxPage } from './components/thxPage/ThxPage';

export const App = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(Selector.cartState);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        'https://62f600ee612c13062b4441c2.mockapi.io/sneakers/items',
      );
      dispatch(setItems(data));
    })();
  }, []);

  return (
    <>
      {cartState && (
        <>
          <Drawer />
          <Overlay />
        </>
      )}
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Items />} />
          <Route path="cart" element={<Drawer />} />
          <Route path="orderpage" element={<OrderPage />} />
          <Route path="favourite" element={<FavouritePage />} />
          <Route path="thxpage" element={<ThxPage />} />
        </Route>
      </Routes>
    </>
  );
};
