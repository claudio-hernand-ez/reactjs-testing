/* istanbul ignore file */
import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  padding: 1.5rem 2rem;
  border-color: black;
  border-style: solid;
  border-width: 4px;
`;

export const H1 = styled.h1`
  display: table;
  padding: 0 0.5rem;
  margin: -1.8rem 0 1rem;
  font-size: 1rem;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  padding: 1rem 1.5rem;
  margin: 4px;
  border-style: solid;
  border-width: 4px;
  border-color: black;
  border-radius: 10px;
`;

export const Button = styled.button`
  border-image-outset: 2;
  display: inline-block;
  padding: 15px 10px;
  margin: 4px;
  width: 30%;
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
