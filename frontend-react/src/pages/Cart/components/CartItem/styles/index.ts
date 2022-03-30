import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;
`;

/* istanbul ignore file */
export const Button = styled.button`
  color: #fff;
  background-color: #e76e55;
  border-image-outset: 2;
  display: inline-block;
  padding: 6px 8px;
  margin: 4px;
  width: 20%;
  font-size: 13px;
  font-family: 'Press Start 2P', sans-serif;
  text-align: center;
  vertical-align: middle;
  color: #fff;
  /* background-color: #209cee; */
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
      14 0,
    pointer;
`;
