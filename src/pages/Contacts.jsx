import { Phonebook } from '../components/Phonebook';
import { ContactList } from '../components/ContactList';
import { Filter } from '../components/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      {error ? (
        <b>{error}</b>
      ) : (
        <>
          {isLoading && <b>Request in progress...</b>}
          <ContactList />
        </>
      )}
    </>
  );
}
