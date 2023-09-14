import styled from 'styled-components';
export const List = styled.ul`
  margin-top: 12px;
  list-style: none;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  gap: 24px;
  font-size: 24px;
  font-weight: 600;
`;

export const Item = styled.li`
  padding: 8px;
  box-shadow: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px

  }
`;

export const Span = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #102445;
  background-color: ${props => (props.type ? '#00a400' : '#fa383e')};
`;
