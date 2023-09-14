import { Span } from 'components/Friend/Friend-styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <Span type={isOnline}></Span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};
