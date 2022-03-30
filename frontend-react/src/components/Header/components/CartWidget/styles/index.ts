/* istanbul ignore file */
import styled from 'styled-components';

export const Container = styled.div`
  & > a {
    display: block;
    position: relative;
    text-decoration: none;
  }
`;

export const Span = styled.span`
  position: absolute;
  left: auto;
  right: -2.7em;
  top: 0;
  background-color: #4a8c41;
  border-radius: 100%;
  padding: 8px;
  color: white;
`;
