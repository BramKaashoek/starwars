import React from 'react';
import Appbar from '../components/Appbar';
import styled from '@emotion/styled';
import backgroundImagePath from '../../../assets/background.jpeg';

interface IProps {
  children?: JSX.Element | JSX.Element[];
}

// needs backticks because of url
const Root = styled.div`
  background-image: url(${backgroundImagePath});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main({
  maxWidth: 1248,
  alignSelf: 'center',
  width: '100%',
});

const Frame: React.FC<IProps> = props => {
  const { children } = props;
  return (
    <Root>
      <Appbar />
      <Main>{children}</Main>
    </Root>
  );
};

export default Frame;
