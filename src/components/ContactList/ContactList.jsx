import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectVisibleContacts } from '../../redux/selectors';

export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);
    const dispatch = useDispatch();

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '5px' }}>
                    <span>{name}: {number}</span>
                    <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};
