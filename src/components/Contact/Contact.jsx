import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { StyledContainer, Name, Number, Button } from './Contact.Styled';
import { deleteContact } from 'redux/contacts/operations';
import { TiDeleteOutline } from 'react-icons/ti';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <StyledContainer>
      <Name>{contact.name}: </Name>
      <Number>{contact.number}</Number>
      <Button type="button" onClick={handleDelete}>
        <TiDeleteOutline />
      </Button>
    </StyledContainer>
  );
};

Contact.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};
