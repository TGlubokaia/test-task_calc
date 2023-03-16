import React from 'react'
import { Container } from '@mui/material';
import styled from '@emotion/styled';
import { DndContext } from '@dnd-kit/core';
import Sidebar from '../sidebar/sidebar';
import Canvas from '../canvas/canvas';

const MainContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 56px;
`;

const MainScreen: React.FC = () => {
  return (
    <MainContainer maxWidth='sm'>
      <DndContext>
        <Sidebar />
        <Canvas />
      </DndContext>
    </MainContainer>
  );
};

export default MainScreen;
