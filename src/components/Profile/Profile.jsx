import { Avatar, User } from './Profile.styled';
import { UserContainer } from 'components/Utils/Utils-styled';
import PropTypes from 'prop-types';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => (
  <UserContainer>
    <div>
      <Avatar src={avatar} alt="avatar" />
      <h1>{username}</h1>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
    <User>
      <li>
        <span>Followers:</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views:</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes:</span>
        <span>{likes}</span>
      </li>
    </User>
  </UserContainer>
);

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

