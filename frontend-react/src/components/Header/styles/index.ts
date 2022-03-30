/* istanbul ignore file */
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  border-bottom: 4px solid #d3d3d3;
  background-color: white;
`;

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  max-width: 980px;
  margin: 0 auto;
  padding-top: 1rem;
  transition: all 0.2s ease;
`;

export const Brand = styled.div`
  margin-right: auto;

  & > a {
    color: #4a8c41;
    text-decoration: none;
  }
`;
