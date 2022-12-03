import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { StyledUserMenu, UserName } from './UserMenu.styled';
import { Button } from 'components/Common.styled';
import { AiOutlineUser } from 'react-icons/ai';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <StyledUserMenu>
      <p>
        <AiOutlineUser />
        <UserName>Hello, {userName}</UserName>
      </p>
      <Button type="button" onClick={handleClick}>
        Logout
      </Button>
    </StyledUserMenu>
  );
};
