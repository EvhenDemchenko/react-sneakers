import styles from './Drawer.module.scss';

export const Drawer = ({ items, cartSum, addToCartHandler, togleCartHandler }) => {
  return (
    <div className={styles.drawer}>
      <h1 className={styles.heading}> Корзина </h1>

      {items.length ? (
        <>
          {' '}
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
                    onClick={() => addToCartHandler(item.id)}
                    className={styles.closeBtn}
                    src="./assets/closeSvg.svg"
                    alt="closeBtn"
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.orderBlock}>
            <p>итого : {cartSum} Uah </p>
            <button className={styles.orderBtn}>Оформить заказ </button>
          </div>
        </>
      ) : (
        <div className={styles.emptyCart}>
          <div className={styles.content}>
            <img width={120} height={120} src="./assets/emptyCart.jpg" alt="empty cart picture" />
            <h2>Корзина пустая </h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          </div>
          <button onClick={() => togleCartHandler(false)} className={styles.orderBtn}>
            верунться назад{' '}
          </button>
        </div>
      )}
    </div>
  );
};
