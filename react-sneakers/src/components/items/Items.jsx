import Selector from '../../store/selectors';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Card } from '../card/Card';
import { setSearchedValue } from '../../store/slice';

export const Items = () => {
  const dispatch = useDispatch();
  const items = useSelector(Selector.searchedValueItems);
  const inputValue = useSelector(Selector.searchVal);
  return (
    <div className="p-40">
      <div className="mb-25 d-flex justify-between align-center">
        {<h1 className="mb-25">Все кроссовки </h1>}
        <input
          onChange={(e) => dispatch(setSearchedValue(e.target.value))}
          value={inputValue}
          placeholder="введите название то..."
          className="searchinput"
          type="text"
        />
      </div>
      <div className="items">
        {items.length != 0 &&
          items.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};
