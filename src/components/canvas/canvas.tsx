import React from 'react'
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const CanvasBox = styled(Box)`
  width: 243px;
  height: 480px;
  // background-color: gainsboro;
`;

const Canvas: React.FC = () => {
  return <CanvasBox></CanvasBox>;
};

export default Canvas;
