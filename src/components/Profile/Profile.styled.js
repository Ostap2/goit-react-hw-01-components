import { styled } from 'styled-components';
const Avatar = styled.img`
  width: 250px;
  border-radius: 50%;
  border: 2px solid #000;
  background-color: #ccc;
`;
const User = styled.ul`
  margin-top: 22px;
  list-style: none;
  display: flex;
  justify-content: center;
  li {
    width: 100%;
    padding: 10px;
    display: flex;
    font-size: 24px;
    font-weight: 600;
    flex-direction: column;
    gap: 4px;
    border: 1px solid black;
    background-color: #ebedf0;
    color: #a4a6a8;

  }
`;

export { User, Avatar };
