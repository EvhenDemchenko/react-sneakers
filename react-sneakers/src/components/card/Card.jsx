import styles from './Card.module.scss';
import {
  addItemToCart,
  removeItemFromCart,
  removeItemFromFavourite,
  addItemToFavourites,
} from '../../store/thunk';
import { useDispatch } from 'react-redux';

export const Card = ({ item }) => {
  const dispatch = useDispatch();

  const { id, title, price, isFav, inCart, imgPath } = item;
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContent}>
        <img width={133} height={122} src={imgPath} alt="goods" />
        {isFav ? (
          <img
            width={32}
            height={32}
            className={styles.favBtn}
            onClick={() => dispatch(removeItemFromFavourite(id))}
            src="./assets/favBtnActive.svg"
            alt="favourite btn"
          />
        ) : (
          <img
            width={32}
            height={32}
            className={styles.favBtn}
            onClick={() => dispatch(addItemToFavourites(id))}
            src="./assets/favBtn.svg"
            alt="favourite btn"
          />
        )}
      </div>
      <div className={styles.textContent}>
        <h3>{title}</h3>
        <div className={styles.priceBlock}>
          <div>
            <p className={styles.priceDesc}>Цена</p>
            <p className={styles.price}>{price} </p>
          </div>
          {inCart ? (
            <img
              onClick={() => dispatch(removeItemFromCart(id))}
              src="./assets/plusBtnActive.svg"
              alt="add btn "
              width={32}
              height={32}
            />
          ) : (
            <img
              onClick={() => dispatch(addItemToCart(id))}
              src="./assets/plus.svg"
              alt="add btn "
              width={32}
              height={32}
            />
          )}
        </div>
      </div>
    </div>
  );
};
