import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  return (
    <div className={css.searchBox}>
          <label className={css.label} htmlFor="filter">Find contacts by name</label>
          <input className={css.input}
        id="filter"
        name="filter"
        autoComplete="off"
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="Enter name"
      />
    </div>
  );
};

