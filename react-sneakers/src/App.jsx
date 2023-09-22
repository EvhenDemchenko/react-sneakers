import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Card } from './components/card/Card';
import { Drawer } from './components/drawer/Drawer';
import { Overlay } from './components/overlay/Overlay';

export const App = () => {
  const [goods, _setGoods] = useState([
    {
      id: 1,
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
      isFav: false,
      inCart: false,
      imgPath: './assets/React_Sneakers/img1.jpg',
    },
    {
      id: 2,
      title: 'Мужские Кроссовки Nike Air Max 270',
      price: 8499,
      isFav: false,
      inCart: false,
      imgPath: './assets/React_Sneakers/img2.jpg',
    },
    {
      id: 3,
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 8999,
      isFav: false,
      inCart: false,
      imgPath: './assets/React_Sneakers/img3.jpg',
    },
    {
      id: 4,
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      price: 15199,
      isFav: false,
      inCart: false,
      imgPath: './assets/React_Sneakers/img4.jpg',
    },
    {
      id: 5,
      title: 'Мужские Кроссовки Nike Kyrie 7',
      price: 11199,
      isFav: false,
      inCart: false,
      imgPath: './assets/React_Sneakers/img5.jpg',
    },
  ]);
  const [cartItems, addToCart] = useState([]);
  const [val, setVal] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [cartSum, setCartSum] = useState(0);

  const addToCartHandler = (id) => {
    const cartItems = goods.filter((item) => {
      if (item.id == id) {
        item.inCart = !item.inCart;
        return item.inCart;
      } else if (item.inCart == true) {
        return item;
      }
    });
    addToCart(cartItems);
  };
  const addItemsToFav = (id) => {
    const favItems = goods.filter((item) => {
      if (item.id == id) {
        item.isFav = !item.isFav;
        return item.isFav;
      } else if (item.isFav == true) {
        return item;
      }
    });
    console.log(favItems);
    addToCart(favItems);
  };
  const sumOfCartItems = () => {
    setCartSum(() => cartItems.reduce((a, b) => a + b.price, 0));
  };
  const togleCartHandler = (props) => {
    setCartOpen(props);
  };

  useEffect(() => {
    sumOfCartItems();
  }, [cartItems]);

  return (
    <>
      {cartOpen && (
        <>
          <Drawer
            addToCartHandler={addToCartHandler}
            togleCartHandler={togleCartHandler}
            cartSum={cartSum}
            items={cartItems}
          />
          <Overlay togleCartHandler={togleCartHandler} />
        </>
      )}

      <div className="content">
        <Header cartSum={cartSum} togleCartHandler={togleCartHandler} />
        <div className="p-40">
          <div className="mb-25 d-flex justify-between align-center">
            {val ? (
              <h1 className="mb-25">Поиск по : {val}</h1>
            ) : (
              <h1 className="mb-25">Все кроссовки </h1>
            )}
            <input
              placeholder="введите название то..."
              className="searchinput"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              type="text"
            />
          </div>
          <div className="items">
            {goods
              .filter((item) => item.title.toLowerCase().includes(val.toLowerCase()))
              .map((item) => {
                return (
                  <Card
                    key={item.id}
                    item={item}
                    addItemsToFav={addItemsToFav}
                    addToCartHandler={addToCartHandler}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
