import styles from './Drawer.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import Selector from '../../store/selectors';
import { removeItemFromCart } from '../../store/thunk';
import { setCartState } from '../../store/slice';
import { useNavigate } from 'react-router-dom';

export const Drawer = () => {
  const items = useSelector(Selector.cartItems);
  const navigate = useNavigate();
  const cartItemsSum = useSelector(Selector.cartItemsSum);
  const dispatch = useDispatch();

  const orderSunmit = () => {
    dispatch(setCartState('close'));
    navigate('/orderpage');
  };

  return (
    <div className={styles.drawer}>
      <h1 className={styles.heading}> Корзина </h1>

      {items.length != 0 ? (
        <>
          <div className={styles.items}>
            {items.map((item) => {
              return (
                <div className={styles.item} key={item.id}>
                  <img width={70} height={70} src={item.imgPath} alt={item.title} />
                  <div className={styles.textBox}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.price}>{item.price}</p>
                  </div>
                  <img
                    onClick={() => dispatch(removeItemFromCart(item.id))}
                    className={styles.closeBtn}
                    src="./assets/closeSvg.svg"
                    alt="closeBtn"
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.orderBlock}>
            <p>итого : {cartItemsSum} Uah </p>
            <button onClick={orderSunmit} className={styles.orderBtn}>
              Оформить заказ{' '}
            </button>
          </div>
        </>
      ) : (
        <div className={styles.emptyCart}>
          <div className={styles.content}>
            <img width={120} height={120} src="./assets/emptyCart.jpg" alt="empty cart picture" />
            <h2>Корзина пустая </h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          </div>
          <button onClick={() => dispatch(setCartState('close'))} className={styles.orderBtn}>
            верунться назад{' '}
          </button>
        </div>
      )}
    </div>
  );
};
