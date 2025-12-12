import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = e => {
        e.preventDefault();
        if (contacts.some(contact => contact.name === name)) {
            alert(`${name} is already in contacts.`);
            return;
        }
        dispatch(addContact({ name, number }));
        setName('');
        setNumber('');
    };

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                break;
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            <label style={{ display: 'flex', flexDirection: 'column' }}>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column' }}>
                Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
    );
};
