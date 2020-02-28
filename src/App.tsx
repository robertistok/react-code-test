import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';
import Loading from './Loading';
import UserList from './UserList';

const App: React.FunctionComponent = (): React.ReactElement => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000);

  return <Root>{loading ? <Loading /> : <UserList />}</Root>;
};

const Root = styled.div`
  max-width: 620px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fafafa;
  display: flex;
  align-items: center;
`;

export default App;
