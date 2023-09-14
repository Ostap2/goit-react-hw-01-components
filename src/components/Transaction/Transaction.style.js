import { styled } from 'styled-components';

export const TableTransaction = styled.table`
border: 2px solid #474748;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  width: 1100px;
  text-align: center;

  thead {
    background-color: #54c7ec;
    color: #000;
    font-size: 28px;
    padding: 20px;
    height: 50px;
  }
  tbody > tr:nth-child(1n) {

    background-color: #ebedf0;
  }
  tbody > tr:nth-child(2n) {

    background-color: #a4a6a8;
  }
`;
