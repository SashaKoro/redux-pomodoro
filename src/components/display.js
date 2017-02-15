import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  color: black;
  background-color: #BD5417;
  width: 200px;
  height: 120px;
  margin: auto;
  border-radius: 20px 20px 20px 20px;
  font-size: 70px;
  text-align: center;
  line-height: 115px;
`;

const Display = ({ displayOutput }) => {
  Display.propTypes = {
    displayOutput: PropTypes.string,
  };

  return (
    <Div className="Display">{displayOutput}</Div>
  );
};

export default Display;
