import React from 'react';
import styled from 'styled-components';
import Map from './Map';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

function App() {
  return (
    <AppContainer>
      <Map />
    </AppContainer>
  );
}

export default App;
