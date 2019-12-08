import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

interface IProps {}

const Bar = styled.div({
  height: 140,
  padding: 8,
  fontSize: 96,
  font: 'Squada',
  color: 'yellow',
  fontWeight: 'bold',
});

const Appbar: React.FC<IProps> = props => {
  const maxSize = 700;
  const [showSmall, setShowSmall] = useState(window.innerWidth < maxSize);

  // add on 'mount', remove on 'dismount'
  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  const updateWindowSize = () => {
    setShowSmall(window.innerWidth < maxSize);
  };

  return showSmall ? <Bar data-test="appbar">GB</Bar> : <Bar data-test="appbar">GREENBERRY</Bar>;
};

export default Appbar;
