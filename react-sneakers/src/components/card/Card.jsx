import styles from './Card.module.scss';

export const Card = ({ item, addToCartHandler, addItemsToFav }) => {
  const { id, title, price, isFav, inCart, imgPath } = item;
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContent}>
        <img width={133} height={122} src={imgPath} alt="goods" />
        {isFav ? (
          <img
            onClick={() => {
              addItemsToFav(id);
            }}
            width={32}
            height={32}
            className={styles.favBtn}
            src="./assets/favBtnActive.svg"
            alt="favourite btn"
          />
        ) : (
          <img
            onClick={() => {
              addItemsToFav(id);
            }}
            width={32}
            height={32}
            className={styles.favBtn}
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
              onClick={() => addToCartHandler(id)}
              src="./assets/plusBtnActive.svg"
              alt="add btn "
              width={32}
              height={32}
            />
          ) : (
            <img
              src="./assets/plus.svg"
              alt="add btn "
              onClick={() => addToCartHandler(id)}
              width={32}
              height={32}
            />
          )}
        </div>
      </div>
    </div>
  );
};
