import styles from './FavouritePage.module.scss';
import { useSelector } from 'react-redux';
import Selector from '../../store/selectors';

export const FavouritePage = () => {
  const favItems = useSelector(Selector.favouriteItems);
  return (
    <>
      <h1 className={styles.heading}> Любимые Кроссовки </h1>
      <div className={styles.container}>
        {favItems.length ? (
          favItems.map((item) => {
            return (
              <div className={styles.item} key={item?.id}>
                <img width={160} height={140} src={item.imgPath} alt={item.title} />
                <div className={styles.description}>
                  <p>{item.title}</p>
                  <p> {item.price}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className={styles.altimg}>
            Нет любимых кроссовок...
            <img width={900} height={500} src="../../../assets/cat.jpeg" alt="cat" />
          </div>
        )}
      </div>
    </>
  );
};
