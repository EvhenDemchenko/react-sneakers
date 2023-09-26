import styles from './OrderPage.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import Selector from '../../store/selectors';
import { removeItemFromCart } from '../../store/thunk';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const OrderPage = () => {
  const cartItems = useSelector(Selector.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [desc, setDesc] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    navigate('/thxpage');
  };
  return (
    <>
      <div className={styles.container}>
        <h1> Заполните форму для заказа :</h1>
        <b> Ваши позиции:</b>
        {cartItems.length != 0 ? (
          <>
            <div className={styles.cardContainer}>
              {cartItems &&
                cartItems.map((item) => {
                  return (
                    <div className={styles.cardItem} key={item.id}>
                      <div>
                        <h2> Название : {item.title}</h2>
                        <p> Цена : {item.price} ua </p>
                        <label className={styles.itemInput}>
                          Выберите доступный размер :
                          <select>
                            <option value="37"> 37 (23 см)</option>
                            <option value="38"> 38 (24 см)</option>
                            <option value="39"> 39 (25 см)</option>
                            <option value="40"> 40 (26 см)</option>
                            <option value="41"> 41 (27 см)</option>
                            <option value="42"> 42 (28 см)</option>
                          </select>
                        </label>
                      </div>
                      <img
                        onClick={() => dispatch(removeItemFromCart(item.id))}
                        className={styles.deletebtn}
                        width={32}
                        height={32}
                        src={'../../../assets/closeSvg.svg'}
                        alt="delete btn"
                      />
                      <img src={item?.imgPath} alt={item.title} />
                    </div>
                  );
                })}
            </div>
            <div className={styles.formContainer}>
              <form onSubmit={handlerSubmit} className={styles.form}>
                <label>
                  Введите Имя
                  <input minLength={2} type="text" placeholder="Имя" />
                </label>
                <label>
                  Введите Фамилию
                  <input minLength={2} type="text" placeholder="Фамилия" />
                </label>
                <label>
                  Введите Телефон
                  <input minLength={10} type="tel" placeholder="Телефон" />
                </label>
                <label>
                  Добавить примечание к заказу
                  <input
                    type="checkbox"
                    checked={desc}
                    onChange={(e) => setDesc(e.target.checked)}
                  />
                </label>
                <textarea
                  rows={3}
                  cols={40}
                  className={styles.textarea}
                  placeholder="Примечание к заказу"
                  disabled={!desc}
                />

                <button className={styles.submitBtn} type="submit">
                  оформить заказ
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className={styles.emptyCart}>
            <div className={styles.content}>
              <img width={120} height={120} src="./assets/emptyCart.jpg" alt="empty cart picture" />
              <h2>Корзина пустая </h2>
              <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            </div>
            <button onClick={() => navigate('/')} className={styles.submitBtn}>
              верунться назад
            </button>
          </div>
        )}
      </div>
    </>
  );
};
