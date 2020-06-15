import styled from 'styled-components';
import { statusColors } from '~/styles/colors';

export const Container = styled.div`
  padding: 36px 120px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 36px;
  }

  table {
    margin-top: 22px;
    border-collapse: collapse;

    tr:nth-child(1) {
      padding: 8px;
    }

    tr:nth-child(n + 2) {
      background: #fff;
    }

    th,
    td {
      text-align: center;
      padding: 14px;
      border-bottom: 18px solid #dddddd;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    svg {
      margin-right: 4px;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 142px;

    border: 0;
    background: #7d40e7;
    border-radius: 4px;

    font-weight: bold;
    color: #fff;
  }

  & > div > div {
    height: 36px;
    width: 237px;
  }
`;

export const SpanDeliveryman = styled.span`
  padding: 8px;
  margin-right: 6px;
  border-radius: 12px;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
  background: ${(props) => statusColors[props.status].background};
`;
