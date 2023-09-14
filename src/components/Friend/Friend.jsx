import { FriendListItem } from 'components/FriendItem/FriendItem';
import { Container } from 'components/Utils/Utils-styled';
import { List, Item } from './Friend-styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      <h2>Friends</h2>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <Item key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </Item>
        ))}
      </List>
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      percentage: PropTypes.number,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
