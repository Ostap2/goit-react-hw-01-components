import { getRandomColor } from 'components/Utils/Random-Color';
import styled from 'styled-components';
export const List = styled.ul`
  margin-top: 12px;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 600;
`;

export const Item = styled.li`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border: 1px solid #000;
  border-radius: 100%;
  width: 58px;
  height: 58px;
  background-color: ${getRandomColor};
`;
