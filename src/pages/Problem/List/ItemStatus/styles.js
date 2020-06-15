import styled from 'styled-components';
import { statusColors } from '~/styles/colors';

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => statusColors[props.status].background};
  padding: 4px 8px;
  border-radius: 6px;

  strong {
    color: ${(props) => statusColors[props.status].color};
    font-size: 12px;
  }

  div {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: ${(props) => statusColors[props.status].color};
  }
`;
