import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleChange = e => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', flexDirection: 'column' }}>
                Find contacts by name
                <input type="text" value={filter} onChange={handleChange} />
            </label>
        </div>
    );
};
