/* istanbul ignore file */
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem 2rem;
  padding: 5px;
  flex-grow: 0;
  flex-basis: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 1.5rem !important;
`;

export const Button = styled.button`
  border-image-outset: 2;
  display: inline-block;
  padding: 6px 8px;
  margin: 4px;
  /* width: 30%; */
  font-size: 13px;
  font-family: 'Press Start 2P', sans-serif;
  text-align: center;
  vertical-align: middle;
  color: #fff;
  background-color: #209cee;
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
      14 0,
    pointer;
  &:hover {
    background-color: #108de0;
  }
`;

export const ButtonDisabled = styled.button`
  color: #212529;
  cursor: not-allowed;
  background-color: #d3d3d3;
  box-shadow: inset -4px -4px #adafbc;
  opacity: 0.6;
  border-image-outset: 2;
  display: inline-block;
  padding: 6px 8px;
  margin: 4px;
  /* width: 30%; */
  font-size: 13px;
  font-family: 'Press Start 2P', sans-serif;
  text-align: center;
  vertical-align: middle;
`;
