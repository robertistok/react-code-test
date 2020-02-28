import React from 'react';
import styled from 'styled-components';

const Loading:React.FunctionComponent = ():React.ReactElement => (
  <Root>
    <Circle>
      <Pulse />
    </Circle>
  </Root>
);

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const Pulse = styled.div`
  width: 30px;
  height: 30px;
  background-color: #32cd32;
  border-radius: 100%;
  animation: sa-scaleout 1.5s infinite ease-in-out;

  @keyframes sa-scaleout {
    0% {
      transform: scale(0);
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sa-scaleout {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin: 0px auto;
  background-color: #228b22;
`;

export default Loading;
